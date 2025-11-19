/* support-widget.js — comportamiento aislado del botón flotante y chat */
(function(){
  const WA_PHONE = '50360463073'; // <- reemplaza por tu número (sin +, con código de país)
  const WA_TEXT = encodeURIComponent('Hola! Necesito ayuda con un pedido.');

  function qs(id){ return document.getElementById(id); }

  // Crear referencias lazily (el HTML será insertado en index.html)
  const onReady = ()=>{
    const toggle = qs('support-toggle');
    const menu = qs('support-menu');
    const whBtn = qs('sw-whatsapp');
    const liveBtn = qs('sw-livechat');
    const liveModal = qs('sw-livechat-modal');
    const liveBody = qs('sw-livechat-body');
    const liveForm = qs('sw-livechat-form');
    const liveInput = qs('sw-livechat-input');
    const liveClose = qs('sw-livechat-close');

    // --- Pre-chat: solicitar nombre, apellidos y email antes de iniciar chat ---
    const LIVE_USER_KEY = 'sw_live_user_v1';

    function getSavedLiveUser(){
      try{ const raw = localStorage.getItem(LIVE_USER_KEY); if(!raw) return null; return JSON.parse(raw); }catch(e){ return null; }
    }

    function saveLiveUser(obj){
      try{ localStorage.setItem(LIVE_USER_KEY, JSON.stringify(obj)); return true; }catch(e){ return false; }
    }

    // crea el formulario previo y lo inserta en el modal (si no existe)
    function ensurePreChat(){
      if(!liveModal) return null;
      let existing = liveModal.querySelector('#sw-prechat');
      if(existing) return existing;
      // usar un formulario real para que el navegador muestre autofill/autocompletar
      const wrap = document.createElement('form');
      wrap.id = 'sw-prechat';
      wrap.autocomplete = 'on';
      wrap.style.padding = '14px';
      wrap.style.display = 'flex';
      wrap.style.flexDirection = 'column';
      wrap.style.gap = '8px';

      const hint = document.createElement('p');
      hint.style.margin = '0 0 6px 0';
      hint.style.fontWeight = '600';
      hint.textContent = 'Antes de empezar, por favor dinos quién eres.';

      const first = document.createElement('input');
      first.id = 'sw-pre-first';
      first.name = 'given-name';
      first.autocomplete = 'given-name';
      first.type = 'text';
      first.placeholder = 'Nombre';
      first.required = true;
      first.style.padding = '10px';
      first.style.border = '1px solid #e6eef8';
      first.style.borderRadius = '8px';

      const last = document.createElement('input');
      last.id = 'sw-pre-last';
      last.name = 'family-name';
      last.autocomplete = 'family-name';
      last.type = 'text';
      last.placeholder = 'Apellidos';
      last.required = true;
      last.style.padding = '10px';
      last.style.border = '1px solid #e6eef8';
      last.style.borderRadius = '8px';

      const email = document.createElement('input');
      email.id = 'sw-pre-email';
      email.name = 'email';
      email.type = 'email';
      email.placeholder = 'Correo electrónico';
      email.autocomplete = 'email';
      email.inputMode = 'email';
      email.required = true;
      email.style.padding = '10px';
      email.style.border = '1px solid #e6eef8';
      email.style.borderRadius = '8px';

      // sugerencia desde portapapeles (si contiene un email)
      const clipSuggest = document.createElement('button');
      clipSuggest.type = 'button';
      clipSuggest.id = 'sw-clip-suggest';
      clipSuggest.style.display = 'none';
      clipSuggest.style.padding = '8px 10px';
      clipSuggest.style.border = '0';
      clipSuggest.style.background = '#eef6ff';
      clipSuggest.style.color = '#0b1220';
      clipSuggest.style.borderRadius = '8px';
      clipSuggest.style.fontSize = '13px';
      clipSuggest.style.cursor = 'pointer';
      clipSuggest.style.textAlign = 'left';
      clipSuggest.style.overflow = 'hidden';
      clipSuggest.style.whiteSpace = 'nowrap';
      clipSuggest.style.textOverflow = 'ellipsis';

      clipSuggest.addEventListener('click', ()=>{
        try{
          const txt = clipSuggest.getAttribute('data-email');
          if(txt) email.value = txt;
          clipSuggest.style.display = 'none';
          email.focus();
        }catch(e){}
      });

      // Al hacer focus/click, intentar leer el portapapeles (requiere interacción del usuario)
      async function tryDetectEmailFromClipboard(){
        try{
          if(!navigator.clipboard || typeof navigator.clipboard.readText !== 'function') return;
          // no sobrescribir si ya hay valor
          if((email.value||'').trim()) return;
          const text = await navigator.clipboard.readText();
          if(!text) return;
          const m = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
          if(m && m[0]){
            clipSuggest.setAttribute('data-email', m[0]);
            clipSuggest.textContent = `Pegar: ${m[0]}`;
            clipSuggest.style.display = 'inline-block';
          }
        }catch(err){ /* fallar silenciosamente (permiso, navegador) */ }
      }

      email.addEventListener('focus', tryDetectEmailFromClipboard);
      email.addEventListener('click', tryDetectEmailFromClipboard);

      const btn = document.createElement('button');
      btn.type = 'submit';
      btn.id = 'sw-pre-start';
      btn.textContent = 'Empezar chat';
      btn.style.padding = '10px';
      btn.style.border = '0';
      btn.style.background = 'var(--accent)';
      btn.style.color = 'white';
      btn.style.borderRadius = '8px';

      // manejar submit del formulario (soporta Enter y comportamiento de autofill)
      wrap.addEventListener('submit', (ev)=>{
        ev.preventDefault();
        const f = (first.value||'').trim();
        const l = (last.value||'').trim();
        const e = (email.value||'').trim();
        if(!f){ first.focus(); return; }
        if(!l){ last.focus(); return; }
        if(!e || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){ email.focus(); return; }
        // guardar y mostrar chat
        saveLiveUser({ first: f, last: l, email: e, ts: Date.now() });
        hidePreChat();
        showLiveChatWithWelcome();
      });

      wrap.appendChild(hint);
      wrap.appendChild(first);
      wrap.appendChild(last);
      wrap.appendChild(email);
      // insertar sugerencia de portapapeles (si se detecta un email)
      wrap.appendChild(clipSuggest);
      wrap.appendChild(btn);

      // insertar antes del body para que aparezca arriba
      liveModal.insertBefore(wrap, liveBody);
      return wrap;
    }

    function showPreChat(){
      const p = ensurePreChat();
      if(p) p.style.display = 'flex';
      if(liveForm) liveForm.style.display = 'none';
      if(liveBody) liveBody.style.display = 'none';
    }

    function hidePreChat(){
      const p = liveModal && liveModal.querySelector('#sw-prechat');
      if(p) p.style.display = 'none';
      if(liveForm) liveForm.style.display = '';
      if(liveBody) liveBody.style.display = '';
    }

    function showLiveChatWithWelcome(){
      if(liveModal) liveModal.setAttribute('aria-hidden','false');
      const user = getSavedLiveUser();
      if(user && liveBody){
        appendMsg(liveBody,'bot', `Hola ${user.first} 👋 ¿En qué podemos ayudarte hoy?`);
      }
      if(liveInput) liveInput.focus();
    }

    if(!toggle) return; // sin widget en la página

    function setMenu(open){
      const isOpen = menu && menu.getAttribute('aria-hidden') === 'false';
      const should = typeof open === 'boolean' ? open : !isOpen;
      if(menu){ menu.setAttribute('aria-hidden', should ? 'false' : 'true'); }
      toggle.setAttribute('aria-expanded', should ? 'true' : 'false');
    }

    toggle.addEventListener('click',(e)=>{ e.stopPropagation(); setMenu(); });

    document.addEventListener('click',(e)=>{
      if(menu && !menu.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
    });

    if(whBtn){
      whBtn.addEventListener('click',()=>{
        const url = `https://wa.me/${WA_PHONE}?text=${WA_TEXT}`;
        window.open(url,'_blank');
      });
    }

    if(liveBtn){
      liveBtn.addEventListener('click',()=>{
        setMenu(false);
        const user = getSavedLiveUser();
        if(user){
          hidePreChat();
          showLiveChatWithWelcome();
        } else {
          if(liveModal) liveModal.setAttribute('aria-hidden','false');
          showPreChat();
          setTimeout(()=>{ const f = qs('sw-pre-first'); if(f) f.focus(); }, 60);
        }
      });
    }

    const tessaBtn = qs('sw-tessa');
    const tessaModal = qs('sw-tessa-modal');
    const tessaClose = qs('sw-tessa-close');
    // `tessaOptions` puede desaparecer si reemplazamos `tessaBody.innerHTML`, por eso lo mantenemos re-asignable
    let tessaOptions = qs('sw-tessa-options');
    const tessaBody = qs('sw-tessa-body');

    // botón back en header (flecha) — lo creamos dinámicamente para no tocar HTML
    let tessaHeaderBack = null;
    function createHeaderBack(){
      if(!tessaModal) return;
      const header = tessaModal.querySelector('.sw-livechat-header');
      if(!header) return;
      // REMOVE any existing sw-tessa-back button before creating a new one
      const existingBtn = header.querySelector('#sw-tessa-back');
      if(existingBtn) existingBtn.remove();
      if(tessaHeaderBack) tessaHeaderBack = null;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.id = 'sw-tessa-back';
      btn.className = 'sw-tessa-back-btn';
      btn.setAttribute('aria-label','Volver al menú');
      btn.style.marginRight = '8px';
      btn.style.padding = '6px 8px';
      btn.style.border = '0';
      btn.style.borderRadius = '8px';
      btn.style.background = 'transparent';
      btn.style.color = 'white';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '18px';
      // usar SVG para mejor control visual
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      btn.addEventListener('click', ()=>{
        if(!tessaBody) return;
        // Vaciar contenido y re-crear el contenedor de opciones correctamente
        tessaBody.innerHTML = '';
        ensureOptionsContainer();
        loadTessaOptions();
        saveTessaState();
        hideHeaderBack();
      });
      // insert before the left block so the arrow appears at the left of the header
      const leftBlock = header.querySelector('.sw-header-left');
      if(leftBlock) header.insertBefore(btn, leftBlock);
      else header.insertBefore(btn, tessaClose || header.firstChild);
      tessaHeaderBack = btn;
      hideHeaderBack();
    }

    function showHeaderBack(){ if(!tessaHeaderBack) createHeaderBack(); if(tessaHeaderBack) tessaHeaderBack.style.display = 'inline-block'; }
    function hideHeaderBack(){ if(tessaHeaderBack) tessaHeaderBack.style.display = 'none'; }

    if(tessaBtn){
      tessaBtn.addEventListener('click',()=>{
        setMenu(false);
        if(tessaModal) tessaModal.setAttribute('aria-hidden','false');
        // al abrir, intentar restaurar conversación previa completa; si no hay, intentar restaurar mínima; si no, mostrar opciones
        if(!restoreTessaState()){
          if(!restoreTessaMinimal()){
            loadTessaOptions();
          }
        }
      });
    }

    // --- Persistencia simple de la conversación de Tessa en localStorage ---
    const TESSA_KEY = 'tessa_conversation_v1';
    // Persistencia mínima: opción seleccionada + última respuesta del bot
    const TESSA_MIN_KEY = 'tessa_selected_v1';
    // Estado runtime para saber qué opción eligió el usuario (action,text)
    let currentSelected = null;

    function saveTessaState(){
      try{
        if(!tessaBody) return false;
        const payload = {
          html: tessaBody.innerHTML,
          ts: Date.now()
        };
        localStorage.setItem(TESSA_KEY, JSON.stringify(payload));
        return true;
      }catch(err){ console.warn('No se pudo guardar estado Tessa', err); return false; }
    }

    function restoreTessaState(){
      try{
        if(!tessaBody) return false;
        const raw = localStorage.getItem(TESSA_KEY);
        if(!raw) return false;
        const payload = JSON.parse(raw);
        if(!payload || !payload.html) return false;
        // Restaurar HTML previo
        tessaBody.innerHTML = payload.html;
        // Evitar que se muestre el panel de opciones (si existía), para mostrar la conversación
        // Re-obtener / crear el contenedor de opciones por si fue reemplazado
        ensureOptionsContainer();
        if(tessaOptions) tessaOptions.innerHTML = '';
        // Re-adjuntar listeners (p.ej. botón "volver al menú") y asegurarnos del back action
        attachBackListeners();
        ensureBackAction();
        // mostrar botón en header si hay conversación
        showHeaderBack();
        // Scroll suave para mostrar lo último
        scrollTessaToEnd(true);
        return true;
      }catch(err){ console.warn('No se pudo restaurar estado Tessa', err); return false; }
    }

    function clearTessaState(){ try{ localStorage.removeItem(TESSA_KEY); }catch(e){} }

    function loadTessaOptions(){
      // Asegurarnos de que existe el contenedor `#sw-tessa-options` en el DOM
      ensureOptionsContainer();
      if(!tessaOptions) return;
      // cuando cargamos opciones, ocultar flecha de volver en header
      hideHeaderBack();
      tessaOptions.innerHTML = '';
      const options = [
        { text: '📦 Ver mis pedidos', action: 'orders' },
        { text: '❓ Preguntas frecuentes', action: 'faq' },
        { text: '🚚 Rastrear envío', action: 'track' },
        { text: '💬 Chat con agente', action: 'agent' }
      ];
      options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'tessa-option-btn';
        btn.style.background = '#f3f4f6';
        btn.style.border = '1px solid #e5e7eb';
        btn.style.padding = '12px';
        btn.style.borderRadius = '8px';
        btn.style.textAlign = 'left';
        btn.style.cursor = 'pointer';
        btn.style.fontWeight = '500';
        btn.style.color = '#0b1220';
        btn.style.transition = 'all 160ms ease';
        btn.textContent = opt.text;
        btn.addEventListener('mouseenter', ()=> btn.style.background = '#e5e7eb');
        btn.addEventListener('mouseleave', ()=> btn.style.background = '#f3f4f6');
        btn.addEventListener('click', ()=> handleTessaOption(opt.action, opt.text));
        tessaOptions.appendChild(btn);
      });
    }

    // Asegura que exista el contenedor de opciones dentro de `tessaBody` y reasigna `tessaOptions`
    function ensureOptionsContainer(){
      if(!tessaBody) return;
      let existing = tessaBody.querySelector('#sw-tessa-options');
      if(!existing){
        // intentar preservar un encabezado/instrucción similar al original
        const intro = document.createElement('div');
        intro.style.textAlign = 'center';
        intro.style.padding = '20px 16px 16px';

        // Si el modal tiene el avatar en su header, clonarlo para mantener la misma apariencia
        try{
          const headerAvatar = tessaModal && tessaModal.querySelector && tessaModal.querySelector('.sw-header-avatar');
          if(headerAvatar){
            const avatarClone = headerAvatar.cloneNode(true);
            avatarClone.style.width = '48px';
            avatarClone.style.height = '48px';
            avatarClone.style.margin = '0 auto 10px';
            intro.appendChild(avatarClone);
          } else {
            // fallback SVG si no existe avatar
            const svgFallback = document.createElement('div');
            svgFallback.innerHTML = `
              <svg width="70" height="90" viewBox="0 0 100 140" fill="none" style="margin:0 auto;display:block;margin-bottom:12px;overflow:visible !important">
                <ellipse cx="50" cy="45" rx="32" ry="35" fill="#e8eaed"/>
                <rect x="40" y="18" width="20" height="12" rx="2" fill="#c5c7cc"/>
                <rect x="20" y="28" width="60" height="48" rx="6" fill="#1a3a52"/>
              </svg>
            `;
            intro.appendChild(svgFallback);
          }
        }catch(e){
          const svgFallback = document.createElement('div');
          svgFallback.innerHTML = `
            <svg width="70" height="90" viewBox="0 0 100 140" fill="none" style="margin:0 auto;display:block;margin-bottom:12px;overflow:visible !important">
              <ellipse cx="50" cy="45" rx="32" ry="35" fill="#e8eaed"/>
              <rect x="40" y="18" width="20" height="12" rx="2" fill="#c5c7cc"/>
              <rect x="20" y="28" width="60" height="48" rx="6" fill="#1a3a52"/>
            </svg>
          `;
          intro.appendChild(svgFallback);
        }

        const title = document.createElement('p');
        title.style.margin = '0';
        title.style.fontWeight = '600';
        title.style.color = '#0b1220';
        title.id = 'sw-tessa-intro-title';
        title.textContent = '¿Cómo te puedo ayudar?';
        intro.appendChild(title);

        tessaBody.appendChild(intro);
        existing = document.createElement('div');
        existing.id = 'sw-tessa-options';
        existing.style.display = 'grid';
        existing.style.gap = '8px';
        existing.style.padding = '0 8px';
        tessaBody.appendChild(existing);
      }
      tessaOptions = existing;
    }

    // smooth scroll helper
    function scrollTessaToEnd(smooth){
      if(!tessaBody) return;
      try{
        tessaBody.scrollTo({ top: tessaBody.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
      }catch(e){ tessaBody.scrollTop = tessaBody.scrollHeight; }
    }

    // Añade un botón "Volver al menú" dentro de la conversación si excede
    function ensureBackAction(){
      if(!tessaBody) return;
      const already = tessaBody.querySelector('.tessa-back-row');
      const msgCount = tessaBody.querySelectorAll('.sw-msg-row').length;
      const exceedsHeight = tessaBody.scrollHeight > (tessaBody.clientHeight + 8);
      // umbral de mensajes también (por si el cuerpo no está limitado en CSS)
      if((exceedsHeight || msgCount > 6) && !already){
        const row = document.createElement('div');
        row.className = 'tessa-action-row tessa-back-row';
        row.style.display = 'flex';
        row.style.justifyContent = 'center';
        row.style.padding = '8px';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'tessa-back-btn';
        btn.textContent = '← Volver al menú';
        btn.style.padding = '8px 12px';
        btn.style.border = '0';
        btn.style.background = '#f3f4f6';
        btn.style.borderRadius = '8px';
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', ()=>{
          // Al volver, limpiar la conversación visible y mostrar opciones
          tessaBody.innerHTML = '';
          ensureOptionsContainer();
          loadTessaOptions();
          saveTessaState();
        });
        row.appendChild(btn);
        tessaBody.appendChild(row);
        scrollTessaToEnd(true);
        saveTessaState();
      }
    }

    // Re-adjunta listeners para el botón volver en caso de restauración desde innerHTML
    function attachBackListeners(){
      if(!tessaBody) return;
      const btns = tessaBody.querySelectorAll('.tessa-back-btn');
      btns.forEach(b=>{
        // si ya tiene listener, saltar (evita duplicados)
        if(b.getAttribute('data-back-attached')) return;
        b.addEventListener('click', ()=>{
          tessaBody.innerHTML = '';
          ensureOptionsContainer();
          loadTessaOptions();
          saveTessaState();
          hideHeaderBack();
        });
        b.setAttribute('data-back-attached','1');
      });
    }

    function handleTessaOption(action, text){
      if(!tessaBody) return;
      // Clear options area for the selected flow
      tessaOptions.innerHTML = '';
      // guardar opción seleccionada en runtime
      currentSelected = { action: action, text: text || action };
      // actualizar el título introductorio para reflejar la opción elegida
      try{ const titleEl = tessaBody.querySelector('#sw-tessa-intro-title'); if(titleEl) titleEl.textContent = currentSelected.text; }catch(e){}
      // Helper to show temporary messages
      function showMessage(msg, who='bot'){
        const row = document.createElement('div');
        row.className = 'sw-msg-row ' + (who === 'bot' ? 'bot' : 'user');
        const bubble = document.createElement('div');
        bubble.className = 'sw-msg-bubble';
        bubble.textContent = msg;
        const meta = document.createElement('div');
        meta.className = 'sw-msg-meta';
        const now = new Date();
        meta.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.appendChild(bubble);
        wrapper.appendChild(meta);
        if(who === 'bot'){
          const avatar = document.createElement('div');
          avatar.className = 'sw-msg-avatar';
          avatar.style.width = '34px';
          avatar.style.height = '34px';
          avatar.style.borderRadius = '50%';
          avatar.style.overflow = 'hidden';
          avatar.style.flex = '0 0 34px';
          avatar.style.background = '#f0f2f5';
          avatar.style.display = 'flex';
          avatar.style.alignItems = 'center';
          avatar.style.justifyContent = 'center';
          avatar.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <ellipse cx="18" cy="16" rx="12" ry="12" fill="#e8eaed"/>
              <rect x="16" y="2" width="4" height="8" rx="2" fill="#00d4ff"/>
              <circle cx="18" cy="2" r="2" fill="#00d4ff"/>
              <ellipse cx="18" cy="18" rx="10" ry="8" fill="#1a3a52"/>
              <circle cx="14" cy="18" r="2" fill="#00e8ff"/>
              <circle cx="22" cy="18" r="2" fill="#00e8ff"/>
              <path d="M14 22 Q18 26 22 22" stroke="#00e8ff" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            </svg>
          `;
          row.appendChild(avatar);
          row.appendChild(wrapper);
        } else {
          row.appendChild(wrapper);
        }
        tessaBody.appendChild(row);
        // scroll suave y persistir
        scrollTessaToEnd(true);
        saveTessaState();
        // cuando el bot responde, también actualizamos la persistencia mínima
        if(who === 'bot') saveTessaMinimal();
        ensureBackAction();
      }

      switch(action){
        case 'orders':
          // Show mock orders list
          tessaBody.querySelectorAll('.tessa-list, .tessa-action-row').forEach(n=>n.remove());
          const list = document.createElement('div');
          list.className = 'tessa-list';
          list.style.display = 'flex';
          list.style.flexDirection = 'column';
          list.style.gap = '8px';
          list.style.padding = '8px 4px 12px';
          const mockOrders = [
            { id: 'P-10234', status: 'En preparación', date: '2025-11-10' },
            { id: 'P-10218', status: 'En tránsito', date: '2025-11-08' }
          ];
          mockOrders.forEach(o=>{
            const card = document.createElement('div');
            card.style.padding = '10px';
            card.style.border = '1px solid #e6eef8';
            card.style.borderRadius = '8px';
            card.style.background = '#fff';
            const title = document.createElement('div'); title.style.fontWeight='700'; title.textContent = o.id;
            const meta = document.createElement('div'); meta.style.fontSize='13px'; meta.style.color='rgba(11,18,32,0.6)'; meta.textContent = `${o.status} · ${o.date}`;
            const details = document.createElement('button'); details.type='button'; details.textContent='Ver detalles'; details.style.marginTop='8px'; details.style.padding='8px 10px'; details.style.border='0'; details.style.background='#0078d4'; details.style.color='white'; details.style.borderRadius='8px';
            details.addEventListener('click', ()=>{
              showMessage(`Detalles del pedido ${o.id}: estado "${o.status}".`, 'bot');
            });
            card.appendChild(title); card.appendChild(meta); card.appendChild(details);
            list.appendChild(card);
          });
          tessaBody.appendChild(list);
          scrollTessaToEnd(true);
          saveTessaState();
          showHeaderBack();
          ensureBackAction();
          break;

        case 'faq':
          // Show FAQ quick answers
          tessaBody.querySelectorAll('.tessa-list, .tessa-action-row').forEach(n=>n.remove());
          const faqs = [
            {q:'¿Cómo devuelvo un producto?', a:'Puedes solicitar la devolución con nuestro formulario de contacto o por WhatsApp.'},
            {q:'¿Cuál es el tiempo de envío?', a:'Generalmente 2-5 días hábiles dependiendo de la ubicación.'}
          ];
          const faqWrap = document.createElement('div'); faqWrap.className='tessa-list'; faqWrap.style.display='flex'; faqWrap.style.flexDirection='column'; faqWrap.style.gap='8px'; faqWrap.style.padding='8px 4px 12px';
          faqs.forEach(item=>{
            const q = document.createElement('button'); q.type='button'; q.textContent = item.q; q.style.textAlign='left'; q.style.padding='10px'; q.style.border='1px solid #e6eef8'; q.style.borderRadius='8px'; q.style.background='#fff';
            q.addEventListener('click', ()=>{
              // Registrar la pregunta concreta como seleccionada
              currentSelected = { action: 'faq', text: item.q };
              // Limpiar las demás opciones para que no se guarden
              if(tessaOptions) tessaOptions.innerHTML = '';
              // Mostrar la pregunta seleccionada como elemento no interactivo
              const selectedWrap = document.createElement('div');
              selectedWrap.style.padding = '8px 4px 0';
              const selBtn = document.createElement('button');
              selBtn.type = 'button';
              selBtn.textContent = item.q;
              selBtn.disabled = true;
              selBtn.style.textAlign = 'left';
              selBtn.style.padding = '10px';
              selBtn.style.border = '1px solid #e6eef8';
              selBtn.style.borderRadius = '8px';
              selBtn.style.background = '#fff';
              selectedWrap.appendChild(selBtn);
              tessaBody.appendChild(selectedWrap);
              // Añadir la respuesta como mensaje del bot para mantener consistencia
              appendMsg(tessaBody, 'bot', item.a);
              // Persistir tanto la conversación completa como la mínima
              saveTessaState();
              saveTessaMinimal();
              scrollTessaToEnd(true);
              ensureBackAction();
            });
            faqWrap.appendChild(q);
          });
          tessaBody.appendChild(faqWrap);
          scrollTessaToEnd(true);
          saveTessaState();
          showHeaderBack();
          ensureBackAction();
          break;

        case 'track':
          // Show input for tracking number
          tessaBody.querySelectorAll('.tessa-list, .tessa-action-row').forEach(n=>n.remove());
          const row = document.createElement('div'); row.className='tessa-action-row'; row.style.display='flex'; row.style.flexDirection='column'; row.style.gap='8px'; row.style.padding='8px';
          const input = document.createElement('input'); input.type='text'; input.placeholder='Ingresa tu número de seguimiento'; input.style.padding='10px'; input.style.border='1px solid #e6eef8'; input.style.borderRadius='8px';
          const btn = document.createElement('button'); btn.type='button'; btn.textContent='Rastrear'; btn.style.padding='10px'; btn.style.border='0'; btn.style.background='#0078d4'; btn.style.color='white'; btn.style.borderRadius='8px';
          btn.addEventListener('click', ()=>{
            const code = (input.value||'').trim();
            if(!code){ input.focus(); return; }
            // Simular búsqueda
            showMessage('Buscando estado para ' + code + '...', 'bot');
            setTimeout(()=>{
              showMessage(`Estado: En tránsito. Entrega estimada: 2 días hábiles.`, 'bot');
            },900);
          });
          row.appendChild(input); row.appendChild(btn);
          tessaBody.appendChild(row);
          input.focus();
          scrollTessaToEnd(true);
          saveTessaState();
          saveTessaMinimal();
          showHeaderBack();
          ensureBackAction();
          break;

        case 'agent':
          // Open live chat modal and focus input, prefer pre-chat if no user
          if(tessaModal) tessaModal.setAttribute('aria-hidden','true');
          // guardar conversación antes de cambiar al live modal
          saveTessaState();
          const liveUser = getSavedLiveUser();
          if(liveUser){
            hidePreChat();
            showLiveChatWithWelcome();
            setTimeout(()=>{ if(liveBody) appendMsg(liveBody,'bot','Conectando con un agente...'); },200);
          } else {
            if(liveModal) liveModal.setAttribute('aria-hidden','false');
            showPreChat();
            setTimeout(()=>{ const f = qs('sw-pre-first'); if(f) f.focus(); }, 60);
          }
          break;

        default:
          console.log('Tessa option unknown:', action);
      }
    }

    // Al cerrar el modal de Tessa guardamos el estado mínimo (opción + última respuesta del bot)
    if(tessaClose) tessaClose.addEventListener('click',()=>{
      // guardar mínima antes de ocultar
      saveTessaMinimal();
      if(tessaModal) tessaModal.setAttribute('aria-hidden','true');
    });

    // Guardar si el usuario recarga/cierra la pestaña y el modal está abierto
    window.addEventListener('beforeunload', ()=>{
      try{ if(tessaModal && tessaModal.getAttribute && tessaModal.getAttribute('aria-hidden') === 'false') saveTessaMinimal(); }catch(e){}
    });

    if(liveClose) liveClose.addEventListener('click',()=>{ if(liveModal) liveModal.setAttribute('aria-hidden','true'); });

    if(liveForm){
      // Mantener adjunto pendiente; solo enviar al pulsar enviar
      let pendingAttachment = null;
      let pendingPreviewUrl = null;

      function formatBytes(bytes){
        if(bytes === 0) return '0 B';
        const k = 1024; const sizes = ['B','KB','MB','GB'];
        const i = Math.floor(Math.log(bytes)/Math.log(k));
        return parseFloat((bytes / Math.pow(k,i)).toFixed(2)) + ' ' + sizes[i];
      }

      function clearPendingAttachment(){
        pendingAttachment = null;
        if(pendingPreviewUrl){ URL.revokeObjectURL(pendingPreviewUrl); pendingPreviewUrl = null; }
        const existing = liveBody.querySelector('.sw-pending-attach');
        if(existing) existing.remove();
      }

      function renderPendingAttachment(){
        const existing = liveForm.querySelector('.sw-pending-attach');
        if(existing) existing.remove();
        if(!pendingAttachment) return;
        const wrap = document.createElement('div');
        wrap.className = 'sw-pending-attach';

        if(pendingAttachment.type && pendingAttachment.type.startsWith('image/')){
          const thumb = document.createElement('img');
          thumb.className = 'sw-pending-thumb';
          pendingPreviewUrl = URL.createObjectURL(pendingAttachment);
          thumb.src = pendingPreviewUrl;
          wrap.appendChild(thumb);
        }

        const info = document.createElement('div');
        info.className = 'sw-pending-info';
        const name = document.createElement('div');
        name.className = 'sw-pending-name';
        name.textContent = pendingAttachment.name;
        const size = document.createElement('div');
        size.className = 'sw-pending-size';
        size.textContent = formatBytes(pendingAttachment.size);
        info.appendChild(name);
        info.appendChild(size);

        const actions = document.createElement('div');
        actions.className = 'sw-pending-actions';
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'sw-pending-remove';
        removeBtn.textContent = 'Eliminar';
        removeBtn.addEventListener('click',()=>{ clearPendingAttachment(); });
        actions.appendChild(removeBtn);

        wrap.appendChild(info);
        wrap.appendChild(actions);

        // insert the pending card into the chat body (above the form)
        // remove any previous pending card in liveBody first
        const prev = liveBody.querySelector('.sw-pending-attach'); if(prev) prev.remove();
        // append to liveBody so it appears like a message card (but visually distinct)
        liveBody.appendChild(wrap);
        // scroll to show it
        liveBody.scrollTop = liveBody.scrollHeight;
      }

      // crear input file oculto
      const attachBtn = document.querySelector('.sw-attach');
      let attachInput = null;
      if(attachBtn){
        attachInput = document.createElement('input');
        attachInput.type = 'file';
        attachInput.accept = 'image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain';
        attachInput.multiple = false;
        attachInput.style.display = 'none';
        document.body.appendChild(attachInput);

        attachBtn.addEventListener('click',()=>{ attachInput.click(); });

        attachInput.addEventListener('change',(ev)=>{
          const files = ev.target.files;
          if(!files || files.length === 0) return;
          pendingAttachment = files[0];
          renderPendingAttachment();
          attachInput.value = '';
        });
      }

      liveForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const text = (liveInput && liveInput.value || '').trim();

        // enviar adjunto pendiente si existe (primero)
        if(pendingAttachment){
          appendAttachment(liveBody, pendingAttachment);
          clearPendingAttachment();
        }

        // enviar texto si hay (después)
        if(text){
          appendMsg(liveBody,'user',text);
        }

        if(liveInput) liveInput.value = '';

        if(text || pendingAttachment){
          setTimeout(()=>{ appendMsg(liveBody,'bot','¡Gracias! Un agente te responderá en breve.'); },700);
        }
      });
    }

    function appendMsg(container, who, text){
      if(!container) return;
      const row = document.createElement('div');
      row.className = 'sw-msg-row ' + (who === 'bot' ? 'bot' : 'user');

      const bubble = document.createElement('div');
      bubble.className = 'sw-msg-bubble';
      bubble.textContent = text;

      const meta = document.createElement('div');
      meta.className = 'sw-msg-meta';
      const now = new Date();
      meta.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.appendChild(bubble);
      wrapper.appendChild(meta);

      if(who === 'bot'){
        const avatar = document.createElement('div');
        avatar.className = 'sw-msg-avatar';
        avatar.style.width = '34px';
        avatar.style.height = '34px';
        avatar.style.borderRadius = '50%';
        avatar.style.overflow = 'hidden';
        avatar.style.flex = '0 0 34px';

        if(container.id === 'sw-livechat-body') {
          // Usar la imagen para el live chat
          const img = document.createElement('img');
          img.src = '/avatares/lu.jpg';
          img.alt = 'Agente';
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.objectFit = 'cover';
          avatar.appendChild(img);
        } else {
          // Usar el SVG para Tessa IA con fondo circular
          avatar.style.background = '#e8eaed'; // Fondo circular
          avatar.style.display = 'flex';
          avatar.style.alignItems = 'center';
          avatar.style.justifyContent = 'center';
          avatar.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <ellipse cx="18" cy="16" rx="12" ry="12" fill="#e8eaed"/>
              <rect x="16" y="2" width="4" height="8" rx="2" fill="#00d4ff"/>
              <circle cx="18" cy="2" r="2" fill="#00d4ff"/>
              <ellipse cx="18" cy="18" rx="10" ry="8" fill="#1a3a52"/>
              <circle cx="14" cy="18" r="2" fill="#00e8ff"/>
              <circle cx="22" cy="18" r="2" fill="#00e8ff"/>
              <path d="M14 22 Q18 26 22 22" stroke="#00e8ff" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            </svg>
          `;
        }

        row.appendChild(avatar);
      }

      row.appendChild(wrapper);
      container.appendChild(row);
      container.scrollTop = container.scrollHeight;
    }

    // Guarda solo la opción seleccionada y la última respuesta del bot (persistencia mínima)
    function saveTessaMinimal(){
      try{
        if(!currentSelected) return false;
        // buscar la última respuesta del bot dentro de tessaBody
        let botMsg = '';
        try{
          const nodes = tessaBody.querySelectorAll('.sw-msg-row.bot .sw-msg-bubble');
          if(nodes && nodes.length) botMsg = nodes[nodes.length - 1].textContent || '';
        }catch(e){}
        const payload = {
          action: currentSelected.action,
          text: currentSelected.text,
          botResponse: botMsg,
          ts: Date.now()
        };
        localStorage.setItem(TESSA_MIN_KEY, JSON.stringify(payload));
        return true;
      }catch(err){ console.warn('No se pudo guardar estado mínimo Tessa', err); return false; }
    }

    // Restaurar estado mínimo si existe: mostrar la opción seleccionada y la última respuesta del bot
    function restoreTessaMinimal(){
      try{
        const raw = localStorage.getItem(TESSA_MIN_KEY);
        if(!raw) return false;
        const payload = JSON.parse(raw);
        if(!payload || !payload.action) return false;
        // preparar la UI: limpiar body y crear contenedores
        tessaBody.innerHTML = '';
        ensureOptionsContainer();
        if(tessaOptions) tessaOptions.innerHTML = '';
        // establecer currentSelected
        currentSelected = { action: payload.action, text: payload.text };
        // recrear el intro con el texto de la opción
        const intro = document.createElement('div');
        intro.style.textAlign = 'center';
        intro.style.padding = '20px 16px 16px';
        const title = document.createElement('p');
        title.style.margin = '0'; title.style.fontWeight = '600'; title.style.color = '#0b1220'; title.id = 'sw-tessa-intro-title';
        title.textContent = currentSelected.text || 'Conversación previa';
        intro.appendChild(title);
        tessaBody.appendChild(intro);
        // si hay respuesta del bot, añadirla como mensaje
        if(payload.botResponse){
          appendMsg(tessaBody, 'bot', payload.botResponse);
        }
        showHeaderBack();
        scrollTessaToEnd(true);
        return true;
      }catch(err){ console.warn('No se pudo restaurar estado mínimo Tessa', err); return false; }
    }

      // Añade un adjunto (archivo) al chat como mensaje de usuario
      function appendAttachment(container, file){
        if(!container || !file) return;
        const row = document.createElement('div');
        row.className = 'sw-msg-row user';

        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';

        const bubble = document.createElement('div');
        bubble.className = 'sw-attachment';

        // Si es imagen, mostrar miniatura grande y centrada
        if(file.type && file.type.startsWith('image/')){
          const imgWrap = document.createElement('div');
          imgWrap.className = 'sw-attachment-imgwrap';
          const img = document.createElement('img');
          img.alt = file.name;
          img.className = 'sw-attachment-img';
          const url = URL.createObjectURL(file);
          img.src = url;
          img.onload = ()=>{ URL.revokeObjectURL(url); };
          imgWrap.appendChild(img);
          bubble.appendChild(imgWrap);
        }

        const meta = document.createElement('div');
        meta.className = 'sw-msg-meta';
        const now = new Date();
        meta.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        wrapper.appendChild(bubble);
        wrapper.appendChild(meta);
        row.appendChild(wrapper);
        container.appendChild(row);
        container.scrollTop = container.scrollHeight;
      }

    document.addEventListener('keydown',(e)=>{
      if(e.key === 'Escape'){
        if(liveModal) liveModal.setAttribute('aria-hidden','true');
        setMenu(false);
      }
    });

    // Mensaje de bienvenida solo si ya existe un usuario guardado
    setTimeout(()=>{ const user = getSavedLiveUser(); if(user && liveBody) appendMsg(liveBody,'bot', `Hola ${user.first} 👋 ¿En qué podemos ayudarte hoy?`); },900);
  };

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady); else onReady();

})();
