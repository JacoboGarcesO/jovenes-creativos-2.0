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

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeLink(sectionId);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = ['header', 'about', 'courses', 'testimonials'];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeLink(section);
          this.activeSection = section;
          break;
        }
      }
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
}
