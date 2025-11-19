// Cookie Banner Logic
            function initCookieBanner() {
                const banner = document.getElementById('cookieBanner');
                const acceptBtn = document.getElementById('acceptCookies');
                const rejectBtn = document.getElementById('rejectCookies');
                
                // Check if user already made a choice
                if (!localStorage.getItem('cookieChoice')) {
                    // Show banner after 1 second
                    setTimeout(() => {
                        banner.style.display = 'block';
                    }, 1000);
                }
                
                acceptBtn.onclick = function() {
                    localStorage.setItem('cookieChoice', 'accepted');
                    localStorage.setItem('cookieDate', new Date().toISOString());
                    banner.style.animation = 'slideOut 0.3s ease-out forwards';
                    setTimeout(() => {
                        banner.style.display = 'none';
                    }, 300);
                };
                
                rejectBtn.onclick = function() {
                    localStorage.setItem('cookieChoice', 'rejected');
                    banner.style.animation = 'slideOut 0.3s ease-out forwards';
                    setTimeout(() => {
                        banner.style.display = 'none';
                    }, 300);
                };
            }
            
            // Add slideOut animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Initialize when DOM is ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initCookieBanner);
            } else {
                initCookieBanner();
            }

            // Drawer behavior: clone navbar links into drawer and control open/close (ARIA + focus)
            function openSiteDrawer(){
                const d = document.getElementById('siteDrawer');
                const o = document.getElementById('drawerOverlay');
                const btn = document.getElementById('navHamburger');
                if(d && o){
                    d.classList.add('open'); o.classList.add('open'); d.setAttribute('aria-hidden','false');
                    document.body.style.overflow='hidden';
                    if(btn) btn.setAttribute('aria-expanded','true');
                    // focus first link after a tick
                    setTimeout(()=>{ const first = d.querySelector('.drawer-item'); if(first) first.focus(); }, 120);
                }
            }
            function closeSiteDrawer(){
                const d = document.getElementById('siteDrawer');
                const o = document.getElementById('drawerOverlay');
                const btn = document.getElementById('navHamburger');
                if(d && o){
                    d.classList.remove('open'); o.classList.remove('open'); d.setAttribute('aria-hidden','true');
                    document.body.style.overflow='auto';
                    if(btn) btn.setAttribute('aria-expanded','false');
                    // return focus to hamburger
                    if(btn) btn.focus();
                }
            }

            document.addEventListener('DOMContentLoaded', ()=>{
                // hamburger
                const btn = document.getElementById('navHamburger');
                if(btn) btn.addEventListener('click', ()=>{ openSiteDrawer(); });

                // close button
                const c = document.getElementById('drawerClose');
                if(c) c.addEventListener('click', ()=>{ closeSiteDrawer(); });

                // clone nav links into nicely styled items
                const nav = document.querySelector('nav.nav-links') || document.querySelector('nav');
                const dest = document.getElementById('drawerContent');
                if(nav && dest){
                    const items = nav.querySelectorAll('a, button');
                    items.forEach(node=>{
                        const a = document.createElement('a');
                        a.className = 'drawer-item';
                        a.setAttribute('tabindex','0');
                        a.setAttribute('role','menuitem');
                        const label = document.createElement('span');
                        label.className = 'label';
                        // determine text content (buttons may contain only SVGs)
                        let text = (node.textContent || '').trim();
                        if(!text){
                            // prefer title or aria-label for buttons
                            text = node.getAttribute('title') || node.getAttribute('aria-label') || '';
                        }
                        // fallback for common actions
                        if(!text && node.tagName.toLowerCase() === 'button'){
                            // if it's the login button (common case), use an explicit label
                            text = 'Iniciar sesión';
                        }
                        label.textContent = text;

                        const chev = document.createElement('span');
                        chev.className = 'chev';
                        chev.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

                        if(node.tagName.toLowerCase()==='a'){
                            a.href = node.getAttribute('href') || '#';
                            a.appendChild(label);
                            a.appendChild(chev);
                            a.addEventListener('click', ()=>{ closeSiteDrawer(); });
                        } else if(node.tagName.toLowerCase()==='button'){
                            a.href = '#';
                            a.appendChild(label);
                            a.appendChild(chev);
                            a.addEventListener('click', (e)=>{
                                e.preventDefault();
                                closeSiteDrawer();
                                try{
                                    // prefer direct call to openLogin if present
                                    if(typeof openLogin === 'function' && (node.getAttribute('onclick')||'').includes('openLogin')){
                                        openLogin();
                                    } else {
                                        node.click();
                                    }
                                }catch(err){}
                            });
                        }

                        dest.appendChild(a);
                    });
                }

                // close on escape key
                document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeSiteDrawer(); });
            });