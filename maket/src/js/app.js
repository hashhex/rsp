import gsap from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DoSlide from 'do-slide'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import Swiper , { Navigation, Pagination } from 'swiper/core'
Swiper.use([Navigation, Pagination])

const ControlNav = {
    burgers: document.querySelectorAll('.burger'),
    nav_tops: document.querySelectorAll('.nav-top'),
    toggle: function () {
        this.burgers.forEach((burger, i) => {
            if (!burger.classList.contains('active')) {
                burger.classList.add('active')
                this.nav_tops[i].classList.add('active')
            } else {
                burger.classList.remove('active')
                this.nav_tops[i].classList.remove('active')
            }
        })
    },
    handler: function () {
        /*
        * Burger & NavTop их много так что все через querySelectorAll
        */ 
        let burgers = this.burgers
        let nav_tops = this.nav_tops
    
        if (!burgers || !nav_tops) {
            return false
        }
    
        burgers.forEach((burger, i) => {
            burger.addEventListener('click', () => {
                this.toggle()
            })
        })
    },
    close: function () {
        this.burgers.forEach((burger, i) => {
            burger.classList.remove('active')
            this.nav_tops[i].classList.remove('active')
        })
    }

}



ControlNav.handler()

function scrollingSections() {

    let sections = document.querySelectorAll('.section')
    if (!sections) {
        return false
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (!document.querySelector('.ds-container')) {
            return false
        }
        var slide = new DoSlide('.ds-container', {/* configurations */})

        btnUpPage(slide)

        slide.onBeforeChange((curIndex, lastIndex, cur, last) => {
            ControlNav.close()
        })
    })

    // function goToSection(i, anim) {
    //     gsap.to(window, {
    //         scrollTo: {
    //             y: i * innerHeight,
    //             autoKill: false
    //         },
    //         duration: 1
    //     });

    //     if (anim) {
    //         anim.restart();
    //     }
        
    // }

    // gsap.utils.toArray(".section").forEach((panel, i) => {
    //     ScrollTrigger.create({
    //         trigger: panel,
    //         onEnter: ({
    //             progress,
    //             direction,
    //             isActive,
    //             trigger
    //         }) => {
    //             goToSection(i)
    //             ControlNav.close()
    //             if (isActive) {
    //                 sections.forEach(section => {
    //                     section.classList.remove('active')
    //                 })
    //                 trigger.classList.add('active')
    //             } else {
    //                 trigger.classList.remove('active')
    //             }
    //         }
    //     });

    //     ScrollTrigger.create({
    //         trigger: panel,
    //         start: "bottom bottom",
    //         onEnterBack: (self) => {
    //             goToSection(i)
    //             ControlNav.close()
    //             if (self.isActive) {
    //                 sections.forEach(section => {
    //                     section.classList.remove('active')
    //                 })
    //                 self.trigger.classList.add('active')
    //             } else {
    //                 self.trigger.classList.remove('active')
    //             }
    //         }
    //     });
    //});
}

scrollingSections()


function previewCase() {
    let preview_cases = document.querySelectorAll('.preview_case')

    if (!preview_cases) {
        return false
    }

    preview_cases.forEach(item => {
        let el_transform = item.querySelector('.transform')
        let el_content = item.querySelector('.preview_case-content')
        if (el_content) {
            gsap.to(el_transform, {
                y: el_content.getBoundingClientRect().height
            })
        }
    })

}

previewCase()

function hoverButton () {
    let button = document.querySelector('.hover-js')

    if (!button) {
        return false
    }

    button.addEventListener('mousemove', (e) => {
        e.currentTarget.closest('.section').classList.add('hover')
    })
    button.addEventListener('mouseout', (e) => {
        e.currentTarget.closest('.section').classList.remove('hover')
    })
}

hoverButton()


function btnUpPage (slide) {
    let button = document.querySelector('.btn-up')

    if (!button) {
        return false
    }

    button.addEventListener('click', () => {
        slide.go(0)
    })
}

function caseItem () {
    if (!document.querySelector('.case-carousel')) {
        return false
    }
    const swiper = new Swiper('.case-carousel', {
        spaceBetween: 50,
        pagination: {
            el: ".case-carousel--wrapper .swiper-pagination",
            type: "fraction",
          },
      
        // Navigation arrows
        navigation: {
          nextEl: '.case-carousel--wrapper .swiper-button-next',
          prevEl: '.case-carousel--wrapper .swiper-button-prev',
        },
      });
      
}
caseItem()