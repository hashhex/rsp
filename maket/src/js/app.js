import gsap from "gsap";
import {
    ScrollToPlugin
} from 'gsap/ScrollToPlugin'
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


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
    
        function toggleBurger (burger, i) {
            if (!burger.classList.contains('active')) {
                burger.classList.add('active')
                nav_tops[i].classList.add('active')
            } else {
                burger.classList.remove('active')
                nav_tops[i].classList.remove('active')
            }
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

    function goToSection(i, anim) {
        gsap.to(window, {
            scrollTo: {
                y: i * innerHeight,
                autoKill: false
            },
            duration: 1
        });

        if (anim) {
            anim.restart();
        }
        
    }

    gsap.utils.toArray(".section").forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            onEnter: ({
                progress,
                direction,
                isActive,
                trigger
            }) => {
                goToSection(i)
                ControlNav.close()
                if (isActive) {
                    sections.forEach(section => {
                        section.classList.remove('active')
                    })
                    trigger.classList.add('active')
                } else {
                    trigger.classList.remove('active')
                }
            }
        });

        ScrollTrigger.create({
            trigger: panel,
            start: "bottom bottom",
            onEnterBack: (self) => {
                goToSection(i)
                ControlNav.close()
                if (self.isActive) {
                    sections.forEach(section => {
                        section.classList.remove('active')
                    })
                    self.trigger.classList.add('active')
                } else {
                    self.trigger.classList.remove('active')
                }
            }
        });
    });
}

scrollingSections()

