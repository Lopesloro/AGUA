/* Shared header + footer + modal — PH Águas */

const HEADER_HTML = `
<div id="progress"></div>
<header id="header">
  <div class="header-wrap">
    <a href="index.html" class="logo">
      <img src="images/brand/logo.png" alt="PH Aguas" style="height:88px;width:auto;">
    </a>
    <nav class="nav-main">
      <a href="sobre.html" class="nav-link-plain">Sobre</a>

      <div class="nav-item">
        <a href="sistemas.html" class="nav-link-drop">Sistemas <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="mega-drop">
          <div class="mega-section">
            <div class="mega-col">
              <div class="mega-col-head">Filtracao e Purificacao</div>
              <a href="sistemas.html#filtracao">ETA &mdash; Estacoes de Tratamento</a>
              <a href="sistemas.html#filtracao">Osmose Reversa Dessalinizacao</a>
              <a href="sistemas.html#filtracao">Desmineralizacao por Osmose Reversa</a>
              <a href="sistemas.html#filtracao">Carvao Vegetal Ativado</a>
              <a href="sistemas.html#filtracao">Troca Ionica</a>
              <a href="sistemas.html#filtracao">Abrandamento da Agua</a>
              <a href="sistemas.html#filtracao">Remocao de Ferro e Manganes</a>
              <div class="mega-view-all"><a href="sistemas.html">Ver todos os 14 sistemas</a></div>
            </div>
            <div class="mega-col">
              <div class="mega-col-head">Desinfeccao</div>
              <a href="sistemas.html#desinfeccao">Desinfeccao por Ultravioleta (UV)</a>
              <a href="sistemas.html#desinfeccao">Geracao de Ozonio</a>
              <div class="mega-col-head" style="margin-top:16px">Alta Pureza</div>
              <a href="sistemas.html#alta-pureza">Agua UPW e WFI</a>
              <a href="sistemas.html#alta-pureza">Polarizadores Magneticos</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-head">Sustentabilidade</div>
              <a href="sistemas.html#sustentabilidade">Reuso de Agua</a>
              <a href="sistemas.html#sustentabilidade">ETE &mdash; Tratamento de Efluentes</a>
              <a href="chuva.html">Captacao de Agua de Chuva</a>
              <div class="mega-col-head" style="margin-top:16px">Industriais</div>
              <a href="sistemas.html#servicos-industria">Caldeiras e Geradores de Vapor</a>
              <a href="sistemas.html#servicos-industria">Torres de Refrigeracao</a>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <a href="equipamentos.html" class="nav-link-drop">Equipamentos <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="mega-drop">
          <div class="mega-section">
            <div class="mega-col">
              <div class="mega-col-head">Filtracao</div>
              <a href="equipamentos.html#eq-filtracao">Membranas de Osmose Reversa</a>
              <a href="equipamentos.html#eq-filtracao">Filtros Big Blue</a>
              <a href="equipamentos.html#eq-filtracao">Leitos Filtrantes</a>
              <a href="equipamentos.html#eq-filtracao">Filtros de Cartucho</a>
              <a href="equipamentos.html#eq-filtracao">Crepinas e Distribuidores</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-head">Componentes Industriais</div>
              <a href="equipamentos.html#eq-componentes">Bombas Dosadoras de Cloro</a>
              <a href="equipamentos.html#eq-componentes">Valvulas Automaticas</a>
              <a href="equipamentos.html#eq-componentes">Vasos de Pressao Filtrantes</a>
              <a href="equipamentos.html#eq-componentes">Vasos para Membranas</a>
              <div class="mega-col-head" style="margin-top:16px">Potabilidade</div>
              <a href="equipamentos.html#eq-potabilidade">Purificadores Residenciais</a>
              <div class="mega-view-all"><a href="equipamentos.html">Ver todos os equipamentos</a></div>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <a href="servicos.html" class="nav-link-drop">Servicos <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="mega-drop">
          <div class="mega-section">
            <div class="mega-col">
              <div class="mega-col-head">Projetos e Implantacao</div>
              <a href="servicos.html#srv-projetos">Consultoria e Projetos</a>
              <a href="servicos.html#srv-projetos">Instalacao e Montagem</a>
              <a href="servicos.html#srv-projetos">Retrofit de Sistemas</a>
              <a href="servicos.html#srv-projetos">Gestao Sustentavel</a>
              <div class="mega-col-head" style="margin-top:16px">Operacao Industrial</div>
              <a href="servicos.html#srv-operacao">Tratamento de Caldeiras</a>
              <a href="servicos.html#srv-operacao">Torres de Refrigeracao</a>
              <a href="servicos.html#srv-operacao">Automacao e Monitoramento</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-head">Manutencao</div>
              <a href="servicos.html#srv-manutencao">Higienizacao e Sanitizacao</a>
              <a href="servicos.html#srv-manutencao">Limpeza Quimica</a>
              <a href="servicos.html#srv-manutencao">Economia de Agua e Energia</a>
              <div class="mega-col-head" style="margin-top:16px">Modelos de Negocio</div>
              <a href="servicos.html#srv-negocios">Locacao de Equipamentos</a>
              <a href="servicos.html#srv-negocios">B.O.T. &mdash; Build Operate Transfer</a>
              <div class="mega-view-all"><a href="servicos.html">Ver todos os servicos</a></div>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <a href="produtos.html" class="nav-link-drop">Produtos <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="mega-drop mega-drop-right">
          <div class="mega-section">
            <div class="mega-col">
              <div class="mega-col-head">Produtos Quimicos</div>
              <a href="produtos.html#prod-quimicos">Soda Caustica (NaOH)</a>
              <a href="produtos.html#prod-quimicos">Policloreto de Aluminio (PAC)</a>
              <a href="produtos.html#prod-quimicos">NR5 &mdash; Inibidor Anticorrosivo</a>
              <a href="produtos.html#prod-quimicos">TOR 40 &mdash; Antiincrustante</a>
              <a href="produtos.html#prod-quimicos">TOR 43 &mdash; Antiincrustante Premium</a>
              <a href="produtos.html#prod-quimicos">BIO 03 &mdash; Biocida</a>
              <a href="produtos.html#prod-quimicos">NF 300 &mdash; Antiespumante</a>
              <a href="produtos.html#prod-quimicos">Multifuncional para Caldeiras</a>
              <a href="produtos.html#prod-quimicos">Acido Cloridrico (HCl)</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-head">Resinas de Troca Ionica</div>
              <a href="produtos.html#prod-resinas">Resina Cationica</a>
              <a href="produtos.html#prod-resinas">Resina Anionica</a>
              <div class="mega-col-head" style="margin-top:16px">Por Aplicacao</div>
              <a href="produtos.html#prod-aplicacoes">Torres de Resfriamento</a>
              <a href="produtos.html#prod-aplicacoes">Caldeiras de Vapor</a>
              <a href="produtos.html#prod-aplicacoes">Osmose Reversa</a>
              <div class="mega-view-all"><a href="produtos.html">Ver todos os produtos</a></div>
            </div>
          </div>
        </div>
      </div>

      <a href="contato.html" class="btn-nav">Solicitar Orcamento</a>
    </nav>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <nav class="mobile-menu">
    <a href="sobre.html">Sobre</a>
    <a href="sistemas.html">Sistemas</a>
    <a href="equipamentos.html">Equipamentos</a>
    <a href="servicos.html">Servicos</a>
    <a href="produtos.html">Produtos</a>
    <a href="chuva.html">Captacao de Chuva</a>
    <a href="contato.html">Solicitar Orcamento</a>
  </nav>
</header>`;

const FOOTER_HTML = `
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="images/brand/logo.png" alt="PH Aguas">
        <p>Solucoes completas em tratamento de agua e efluentes industriais, residenciais e comerciais. 25+ anos de experiencia nacional.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/phaguas" target="_blank" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.instagram.com/phaguas_/" target="_blank" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
          </a>
          <a href="https://wa.me/5511910301546" target="_blank" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Sistemas</h5>
        <a href="sistemas.html">ETA Industrial</a>
        <a href="sistemas.html">ETE Industrial</a>
        <a href="sistemas.html">Osmose Reversa</a>
        <a href="sistemas.html">Agua UPW / WFI</a>
        <a href="sistemas.html">Desinfeccao UV</a>
        <a href="chuva.html">Captacao de Chuva</a>
      </div>
      <div class="footer-col">
        <h5>Equipamentos</h5>
        <a href="equipamentos.html">Membranas OR</a>
        <a href="equipamentos.html">Filtros Big Blue</a>
        <a href="equipamentos.html">Bombas Dosadoras</a>
        <a href="equipamentos.html">Valvulas Automaticas</a>
        <a href="equipamentos.html">Vasos de Pressao</a>
        <a href="equipamentos.html">Leitos Filtrantes</a>
      </div>
      <div class="footer-col">
        <h5>Servicos</h5>
        <a href="servicos.html">Consultoria</a>
        <a href="servicos.html">Instalacao</a>
        <a href="servicos.html">Caldeiras</a>
        <a href="servicos.html">Torres Refrigeracao</a>
        <a href="servicos.html">Automacao</a>
        <a href="servicos.html">Locacao B.O.T.</a>
      </div>
      <div class="footer-col">
        <h5>Contato</h5>
        <a href="tel:+5511910301546">(11) 91030-1546</a>
        <a href="tel:+551123550292">(11) 2355-0292</a>
        <a href="mailto:contato@phaguas.com.br">contato@phaguas.com.br</a>
        <span>Rua 25 de Marco, 40</span>
        <span>Sao Bernardo do Campo - SP</span>
        <span>Seg-Qui 07:30-17:30</span>
        <span>Sex 07:30-16:30</span>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2025 PH Aguas. Todos os direitos reservados.</span>
      <span>CNPJ: 09.123.456/0001-00 | LGPD Compliant</span>
    </div>
  </div>
</footer>
<a href="https://wa.me/5511910301546?text=Ola,%20gostaria%20de%20um%20orcamento" class="wa-float" target="_blank" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
</a>

<div id="ph-modal" class="ph-modal" aria-hidden="true">
  <div class="ph-modal-backdrop"></div>
  <div class="ph-modal-box">
    <button class="ph-modal-close" id="ph-modal-close-btn" aria-label="Fechar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="ph-modal-img-wrap" id="ph-modal-img-wrap"></div>
    <div class="ph-modal-body">
      <div id="ph-modal-tag" class="ph-modal-tag"></div>
      <h3 id="ph-modal-title" class="ph-modal-title"></h3>
      <div id="ph-modal-sub" class="ph-modal-sub"></div>
      <p id="ph-modal-desc" class="ph-modal-desc"></p>
      <div id="ph-modal-specs" class="ph-modal-specs"></div>
      <div class="ph-modal-actions">
        <a id="ph-modal-wa" href="#" class="btn btn-primary" target="_blank">Solicitar pelo WhatsApp</a>
        <a href="contato.html" class="btn btn-outline">Solicitar Orcamento</a>
      </div>
    </div>
  </div>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // JS-based dropdown with delay to prevent hover gap cut-off
  document.querySelectorAll('.nav-item').forEach(item => {
    let timer;
    item.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('nav-open'));
      item.classList.add('nav-open');
      const drop = item.querySelector('.mega-drop');
      if (drop) {
        drop.style.left = '0';
        drop.style.right = '';
        requestAnimationFrame(() => {
          const r = drop.getBoundingClientRect();
          const W = window.innerWidth;
          if (r.right > W - 8) {
            drop.style.left = Math.round(W - 8 - r.right) + 'px';
          } else if (r.left < 8) {
            drop.style.left = Math.round(8 - r.left) + 'px';
          }
        });
      }
    });
    item.addEventListener('mouseleave', () => {
      timer = setTimeout(() => item.classList.remove('nav-open'), 180);
    });
  });
});
