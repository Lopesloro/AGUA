/* Cabeçalho + rodapé + modal compartilhados — PH Águas */

const HEADER_HTML = `
<div id="progress"></div>
<header id="header">
  <div class="header-wrap">
    <a href="index.html" class="logo" aria-label="PH Águas — página inicial">
      <img src="images/brand/logo.png" alt="PH Águas" width="220" height="88">
    </a>
    <nav class="nav-main" aria-label="Navegação principal">
      <a href="sobre.html" class="nav-link-plain">Sobre</a>

      <div class="nav-item">
        <a href="sistemas.html" class="nav-link-drop">Sistemas <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="mega-drop">
          <div class="mega-section">
            <div class="mega-col">
              <div class="mega-col-head">Filtração e Purificação</div>
              <a href="sistemas.html#filtracao">ETA &mdash; Estações de Tratamento</a>
              <a href="sistemas.html#filtracao">Osmose Reversa e Dessalinização</a>
              <a href="sistemas.html#filtracao">Desmineralização por Osmose Reversa</a>
              <a href="sistemas.html#filtracao">Carvão Vegetal Ativado</a>
              <a href="sistemas.html#filtracao">Troca Iônica</a>
              <a href="sistemas.html#filtracao">Abrandamento da Água</a>
              <a href="sistemas.html#filtracao">Remoção de Ferro e Manganês</a>
              <div class="mega-view-all"><a href="sistemas.html">Ver todos os 14 sistemas</a></div>
            </div>
            <div class="mega-col">
              <div class="mega-col-head">Desinfecção</div>
              <a href="sistemas.html#desinfeccao">Desinfecção por Ultravioleta (UV)</a>
              <a href="sistemas.html#desinfeccao">Geração de Ozônio</a>
              <div class="mega-col-head" style="margin-top:16px">Alta Pureza</div>
              <a href="sistemas.html#alta-pureza">Água UPW e WFI</a>
              <a href="sistemas.html#alta-pureza">Polarizadores Magnéticos</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-head">Sustentabilidade</div>
              <a href="sistemas.html#sustentabilidade">Reúso de Água</a>
              <a href="sistemas.html#sustentabilidade">ETE &mdash; Tratamento de Efluentes</a>
              <div class="mega-col-head" style="margin-top:16px">Industriais</div>
              <a href="sistemas.html#servicos-industria">Caldeiras e Geradores de Vapor</a>
              <a href="sistemas.html#servicos-industria">Torres de Refrigeração</a>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <a href="equipamentos.html" class="nav-link-drop">Equipamentos <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="mega-drop">
          <div class="mega-section">
            <div class="mega-col">
              <div class="mega-col-head">Filtração</div>
              <a href="equipamentos.html#eq-filtracao">Membranas de Osmose Reversa</a>
              <a href="equipamentos.html#eq-filtracao">Filtros Big Blue</a>
              <a href="equipamentos.html#eq-filtracao">Leitos Filtrantes</a>
              <a href="equipamentos.html#eq-filtracao">Filtros de Cartucho</a>
              <a href="equipamentos.html#eq-filtracao">Crepinas e Distribuidores</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-head">Componentes Industriais</div>
              <a href="equipamentos.html#eq-componentes">Bombas Dosadoras para Diversos Segmentos</a>
              <a href="equipamentos.html#eq-componentes">Válvulas Automáticas e Cabeçotes</a>
              <a href="equipamentos.html#eq-componentes">Vasos de Pressão Filtrantes</a>
              <a href="equipamentos.html#eq-componentes">Vasos para Membranas</a>
              <div class="mega-col-head" style="margin-top:16px">Potabilidade</div>
              <a href="equipamentos.html#eq-potabilidade">Purificadores Residenciais</a>
              <div class="mega-view-all"><a href="equipamentos.html">Ver todos os equipamentos</a></div>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <a href="servicos.html" class="nav-link-drop">Serviços <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="mega-drop">
          <div class="mega-section">
            <div class="mega-col">
              <div class="mega-col-head">Projetos e Implantação</div>
              <a href="servicos.html#srv-projetos">Consultoria e Projetos</a>
              <a href="servicos.html#srv-projetos">Instalação e Montagem</a>
              <a href="servicos.html#srv-projetos">Retrofit de Sistemas</a>
              <div class="mega-col-head" style="margin-top:16px">Operação Industrial</div>
              <a href="servicos.html#srv-operacao">Tratamento de Caldeiras</a>
              <a href="servicos.html#srv-operacao">Torres de Refrigeração e Chillers</a>
              <a href="servicos.html#srv-operacao">Automação e Monitoramento</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-head">Manutenção e Limpeza</div>
              <a href="servicos.html#srv-limpeza">Limpeza de Caixa d'Água e Reservatórios</a>
              <a href="servicos.html#srv-limpeza">Higienização de Bebedouros e Filtros</a>
              <a href="servicos.html#srv-limpeza">Manutenção de Filtros (Areia, Carvão, Zeólita, Resinas)</a>
              <a href="chuva.html">Captação de Água de Chuva</a>
              <a href="servicos.html#srv-complementares">BR Ecosystem &mdash; ETE</a>
              <a href="servicos.html#srv-complementares">Serviços Complementares (Coifas e Ar-Condicionado)</a>
              <div class="mega-view-all"><a href="servicos.html">Ver todos os serviços</a></div>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <a href="produtos.html" class="nav-link-drop">Produtos <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="mega-drop mega-drop-right">
          <div class="mega-section">
            <div class="mega-col">
              <div class="mega-col-head">Produtos Químicos</div>
              <a href="produtos.html#prod-quimicos">Hidróxido de Sódio (NaOH)</a>
              <a href="produtos.html#prod-quimicos">Policloreto de Alumínio (PAC)</a>
              <a href="produtos.html#prod-quimicos">Polímero Aniônico</a>
              <a href="produtos.html#prod-quimicos">Barrilha</a>
              <a href="produtos.html#prod-quimicos">Cal Hidratada</a>
              <a href="produtos.html#prod-quimicos">Ácido Clorídrico (HCl)</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-head">Resinas de Troca Iônica</div>
              <a href="produtos.html#prod-resinas">Resina Catiônica</a>
              <a href="produtos.html#prod-resinas">Resina Aniônica</a>
              <div class="mega-col-head" style="margin-top:16px">Como Utilizamos</div>
              <a href="produtos.html#prod-aplicacoes">Aplicações nos Serviços</a>
              <a href="produtos.html#prod-seguranca">Segurança e Manuseio</a>
              <div class="mega-view-all"><a href="produtos.html">Ver todos os produtos</a></div>
            </div>
          </div>
        </div>
      </div>

      <a href="analise.html" class="nav-link-plain">Análise de Água</a>

      <a href="contato.html" class="btn-nav">Solicitar Orçamento</a>
    </nav>
    <button class="hamburger" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <nav id="mobile-menu" class="mobile-menu" aria-label="Navegação mobile">
    <a href="sobre.html">Sobre</a>
    <a href="sistemas.html">Sistemas</a>
    <a href="equipamentos.html">Equipamentos</a>
    <a href="servicos.html">Serviços</a>
    <a href="produtos.html">Produtos</a>
    <a href="analise.html">Análise de Água</a>
    <a href="chuva.html">Captação de Chuva</a>
    <a href="contato.html">Solicitar Orçamento</a>
  </nav>
</header>`;

const FOOTER_HTML = `
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="images/brand/logo.png" alt="PH Águas" width="200" height="80">
        <p>Soluções completas em tratamento de água e efluentes para indústria, comércio e residências. Mais de 25 anos de experiência em todo o Brasil.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/phaguas" target="_blank" rel="noopener" aria-label="LinkedIn da PH Águas">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.instagram.com/phaguas_/" target="_blank" rel="noopener" aria-label="Instagram da PH Águas">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.12 1.38C1.36 2.67.95 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.12-1.38.66-.66 1.07-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.12-.66-.66-1.33-1.07-2.12-1.38-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0m0 5.84A6.16 6.16 0 105.84 12 6.16 6.16 0 0012 5.84m0 10.16A4 4 0 1116 12a4 4 0 01-4 4m6.41-11.85a1.44 1.44 0 101.44 1.44 1.44 1.44 0 00-1.44-1.44"/></svg>
          </a>
          <a href="https://wa.me/5511910301546" target="_blank" rel="noopener" aria-label="WhatsApp da PH Águas">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Sistemas</h5>
        <a href="sistemas.html">ETA Industrial</a>
        <a href="sistemas.html">ETE Industrial</a>
        <a href="sistemas.html">Osmose Reversa</a>
        <a href="sistemas.html">Água UPW / WFI</a>
        <a href="sistemas.html">Desinfecção UV</a>
        <a href="chuva.html">Captação de Chuva</a>
      </div>
      <div class="footer-col">
        <h5>Equipamentos</h5>
        <a href="equipamentos.html">Membranas OR</a>
        <a href="equipamentos.html">Filtros Big Blue</a>
        <a href="equipamentos.html">Bombas Dosadoras</a>
        <a href="equipamentos.html">Válvulas Automáticas</a>
        <a href="equipamentos.html">Vasos de Pressão</a>
        <a href="equipamentos.html">Leitos Filtrantes</a>
      </div>
      <div class="footer-col">
        <h5>Serviços</h5>
        <a href="servicos.html">Consultoria</a>
        <a href="servicos.html">Instalação</a>
        <a href="servicos.html">Limpeza de Reservatórios</a>
        <a href="servicos.html">Manutenção de Filtros</a>
        <a href="servicos.html">Torres e Caldeiras</a>
        <a href="analise.html">Análise de Água</a>
      </div>
      <div class="footer-col">
        <h5>Contato</h5>
        <a href="tel:+5511910301546">(11) 91030-1546</a>
        <a href="tel:+551123550292">(11) 2355-0292</a>
        <a href="mailto:contato@phaguas.com.br">contato@phaguas.com.br</a>
        <span>Rua 25 de Março, 40</span>
        <span>São Bernardo do Campo - SP</span>
        <span>Seg-Qui 07:30-17:30</span>
        <span>Sex 07:30-16:30</span>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2025 PH Águas. Todos os direitos reservados.</span>
      <span>CNPJ: 09.123.456/0001-00 | Em conformidade com a LGPD</span>
    </div>
  </div>
</footer>
<a href="https://wa.me/5511910301546?text=Olá,%20gostaria%20de%20um%20orçamento" class="wa-float" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
</a>

<div id="ph-modal" class="ph-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="ph-modal-title">
  <div class="ph-modal-backdrop"></div>
  <div class="ph-modal-box">
    <button class="ph-modal-close" id="ph-modal-close-btn" aria-label="Fechar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="ph-modal-img-wrap" id="ph-modal-img-wrap"></div>
    <div class="ph-modal-body">
      <div id="ph-modal-tag" class="ph-modal-tag"></div>
      <h3 id="ph-modal-title" class="ph-modal-title"></h3>
      <div id="ph-modal-sub" class="ph-modal-sub"></div>
      <p id="ph-modal-desc" class="ph-modal-desc"></p>
      <div id="ph-modal-specs" class="ph-modal-specs"></div>
      <div class="ph-modal-actions">
        <a id="ph-modal-wa" href="#" class="btn btn-primary" target="_blank" rel="noopener">Solicitar pelo WhatsApp</a>
        <a href="contato.html" class="btn btn-outline">Solicitar Orçamento</a>
      </div>
    </div>
  </div>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Dropdown com atraso para evitar corte no vão do hover
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
