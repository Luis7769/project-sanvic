let index = 0;
const slides = document.querySelectorAll(".testimonial-slide");

function changeSlide(step) {
    slides[index].classList.remove("active");
    index = (index + step + slides.length) % slides.length;
    slides[index].classList.add("active");
}

// Cambia de testimonio cada 5 segundos
setInterval(() => changeSlide(1), 5000);


function showService(serviceId) {
    const allServices = document.querySelectorAll('.service-content');
    const tabs = document.querySelectorAll('.service-tab');
  
    // Ocultar todos los contenidos de los servicios
    allServices.forEach(service => service.style.display = 'none');
  
    // Eliminar la clase 'active' de todos los tabs
    tabs.forEach(tab => tab.classList.remove('active'));
  
    // Mostrar el servicio seleccionado
    document.getElementById(serviceId).style.display = 'block';
  
    // Agregar la clase 'active' al tab seleccionado
    const activeTab = Array.from(tabs).find(tab => tab.textContent.toLowerCase().includes(serviceId.toLowerCase()));
    activeTab.classList.add('active');
  }
  
