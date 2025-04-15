import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'home-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeSection: string = 'hero';
  mobileMenuOpen: boolean = false;

  scrollToSection(sectionId: string) {
    if (sectionId === 'header') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.activeLink('header');
      return;
    }

    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeLink(sectionId);
    }
    this.closeMobileMenu();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = ['header', 'about', 'courses', 'testimonials'];
    const scrollPosition = window.scrollY + 150;
    let currentSection = '';

    if (window.scrollY < 200) {
      this.activeLink('header');
      this.activeSection = 'header';
      return;
    }

    // Encontrar la sección actual basada en la posición de scroll
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;

        // Verificar si el scroll está dentro de esta sección
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section;
          break;
        }
      }
    }

    // Si encontramos una sección activa, actualizar el enlace activo
    if (currentSection) {
      this.activeLink(currentSection);
      this.activeSection = currentSection;
    }
  }

  activeLink(section: string) {
    const links = document.querySelectorAll('.header__link');
    links.forEach(link => link.classList.remove('header__link--active'));
    const activeLink = document.querySelector(`[data-section="${section}"]`);
    if (activeLink) {
      activeLink.classList.add('header__link--active');
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    const nav = document.querySelector('.header__nav');
    const toggle = document.querySelector('.header__mobile-toggle');
    const overlay = document.querySelector('.overlay');

    if (this.mobileMenuOpen) {
      nav?.classList.add('active');
      toggle?.classList.add('active');
      overlay?.classList.add('active');
    } else {
      this.closeMobileMenu();
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    const nav = document.querySelector('.header__nav');
    const toggle = document.querySelector('.header__mobile-toggle');
    const overlay = document.querySelector('.overlay');

    nav?.classList.remove('active');
    toggle?.classList.remove('active');
    overlay?.classList.remove('active');
  }
}
