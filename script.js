const data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]



const dataFilter = document.querySelector('.header-filter');
const buttons = dataFilter.querySelectorAll('button');
Array.from(buttons).forEach(button => {
    button.addEventListener('click', setFilter)
})


function setFilter() {
    const active = this.parentElement.querySelector('.active');
    active.classList.remove('active');
    this.classList.toggle('active');
    const filter = (this.textContent).toLowerCase();
    const cards = document.querySelectorAll('.card');
    Array.from(cards).forEach(card => {
        const title = card.querySelector('.card-title>h2').textContent;
        const dataf = data.find(item => { return (item.title).toLocaleLowerCase() === (title).toLocaleLowerCase() });
        card.querySelector('p').textContent = dataf.timeframes[filter].current + "hrs";
        card.querySelector('small').textContent = "last week - " + dataf.timeframes[filter].previous + "hrs";
    });
}