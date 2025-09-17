import { Analytics } from "@vercel/analytics/next"

// Dados dos projetos (pode ser substituído por uma API no futuro)
const projectsData = [
  {
    title: "Oficina Engetronic - Landing Page",
    description: "Uma landing page moderna e totalmente responsiva para uma oficina automotiva, com foco em manutenção de qualidade e o melhor atendimento.",
    link: "https://engetronic.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"]
  },
  {
    title: "Sistema de Verificador de Nomes Repetidos - VNR",
    description: "Sistema feito com exclusividade para um gestor verificar as informações passadas por seus colaboradores.",
    link: "https://sistema-vnr.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"]
  },
  // {
  //   title: "Dashboard Analytics",
  //   description: "Painel administrativo para visualização de dados e métricas com gráficos interativos e relatórios personalizáveis.",
  //   link: "#",
  //   technologies: ["Vue.js", "Chart.js", "REST API"]
  // }
];

// Dados de perfil (pode ser expandido)
const profileData = {
  github: "https://github.com/IderlanOliveira",
  linkedin: "https://linkedin.com/in/iderlanoliveira"
};

// Função para inicializar o portfólio
function initPortfolio() {
  setCurrentYear();
  loadProjects();
  setupSmoothScroll();
  setupFormValidation();
  setupSocialLinks();
  setupImageInteraction();
}

// Definir ano atual no footer
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Carregar projetos dinamicamente
function loadProjects() {
  const projectsContainer = document.getElementById('projects-container');
  
  if (!projectsContainer) return;
  
  projectsContainer.innerHTML = projectsData.map(project => `
    <div class="card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="technologies">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <a href="${project.link}" target="_blank">Ver Projeto</a>
    </div>
  `).join('');
}

// Configurar scroll suave para links de navegação
function setupSmoothScroll() {
  const links = document.querySelectorAll('a[data-scroll]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Ajuste para o header fixo
          behavior: 'smooth'
        });
      }
    });
  });
}

// Configurar validação do formulário de contato
function setupFormValidation() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (validateForm(name, email, message)) {
        // Simulação de envio (substituir por API real)
        simulateFormSubmission(name, email, message);
      }
    });
  }
}

// Validar formulário
function validateForm(name, email, message) {
  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    return false;
  }
  
  if (!isValidEmail(email)) {
    alert('Por favor, insira um e-mail válido.');
    return false;
  }
  
  return true;
}

// Validar formato de e-mail
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simular envio do formulário (substituir por integração real)
function simulateFormSubmission(name, email, message) {
  // Mostrar loading
  const submitButton = document.querySelector('#contact-form button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Enviando...';
  submitButton.disabled = true;
  
  // Simular delay de rede
  setTimeout(() => {
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Em breve retornarei seu contato.`);
    
    // Resetar formulário
    document.getElementById('contact-form').reset();
    
    // Restaurar botão
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 1500);
}

// Configurar links sociais
function setupSocialLinks() {
  const githubLink = document.getElementById('github-link');
  const linkedinLink = document.getElementById('linkedin-link');
  
  if (githubLink) {
    githubLink.href = profileData.github;
    githubLink.target = '_blank';
  }
  
  if (linkedinLink) {
    linkedinLink.href = profileData.linkedin;
    linkedinLink.target = '_blank';
  }
}

// Configurar interação com a imagem de perfil
function setupImageInteraction() {
  const profileImage = document.getElementById('profile-image');
  
  if (profileImage) {
    profileImage.addEventListener('click', function() {
      this.classList.toggle('enlarged');
      
      if (this.classList.contains('enlarged')) {
        this.style.transform = 'scale(1.8)';
        this.style.zIndex = '1000';
        this.style.position = 'relative';
      } else {
        this.style.transform = '';
        this.style.zIndex = '';
        this.style.position = '';
      }
    });
  }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initPortfolio);