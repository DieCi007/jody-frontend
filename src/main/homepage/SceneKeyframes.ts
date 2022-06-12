export const DESKTOP_PROPS = {
    '.shapes .top-left': {
        0: {
            transform: "translate(0%, 0vh) translateY(0%)",
        },
        1: {
            transform: "translate(0%, 50vh) translateY(50%)",
        },
        2: {
            transform: "translate(0%, 0vh) translateY(0%) scale(1)"
        },
        3: {
            transform: "translate(33%, 0vh) translateY(43%) scale(0.5)",
        }
    },
    '.shapes .bottom-right': {
        0: {
            transform: "translate(0%, 0vh) translateY(0%)"
        },
        1: {
            transform: "translate(0%, -50vh) translateY(-50%)"
        },
        2: {
            transform: "translate(0%, -50vh) translateY(-150%) scale(1)"
        },
        3: {
            transform: "translate(-33%, 0vh) translateY(-43%) scale(0.5)",
        }
    },
    '.shapes .top-right': {
        0: {
            transform: "translate(0%, 0vh) translateY(0%)",
            bottom: '60%', left: '65%',
        },
        0.9: {
            opacity: 1
        },
        1: {
            transform: "translate(0%, 0vh) translateY(-150%)",
            opacity: 0,
            width: '30vmax', height: '30vmax',
            bottom: '55%', left: '50%'
        },
        2: {
            transform: "translate(0%, 0vh) translateY(-150%) scale(1)",
            opacity: 0,
            width: '50vmax',
            height: '50vmax',
            'border-width': '35px',
        },
        3: {
            transform: "translate(-33%, 0vh) translateY(43%) scale(0.5)",
            opacity: 1,
            'border-width': '15px',
        },
    },
    '.shapes .bottom-left': {
        0: {
            transform: "translate(0%, 0vh) translateY(0%)",
            top: '50%', right: '60%'
        },
        0.9: {
            opacity: 1
        },
        1: {
            transform: "translate(0%, 0vh) translateY(-300%)",
            opacity: 0,
            top: '55%', right: '50%',
        },
        2: {
            transform: "translate(0%, 0vh) translateY(-300%) scale(1)",
            opacity: 0,
            width: '50vmax',
            height: '50vmax',
            'border-width': '35px',
        },
        3: {
            transform: "translate(33%, 0vh) translateY(-43%) scale(0.5)",
            opacity: 1,
            'border-width': '15px',
        },
    },
    '.shapes .center': {
        0: {
            'width': '50vmax',
            'height': '50vmax',
            'border-radius': '50%',
            'border-width': '25px',
        },
        0.9: {
            'border-radius': 0,
            'border-width': 0,
            'height': '100%',
            'width': '100%',
        },
        1.2: {
            transform: "translate(-50%, -50%) translateY(0%)"
        },
        2: {
            transform: "translateY(-100%)"
        }
    },
    '.shapes .background2': {
        0: {
            transform: "translateY(100%)"
        },
        1: {
            transform: "translateY(100%)"
        },
        2: {
            transform: "translateY(0)"
        },
        3: {
            transform: "translateY(-100%)"
        },
    }
};

export const MOBILE_PROPS = {
    '.shapes .top-left': {
        0: {
            transform: "translate(0%, 0vh) translateY(0%)",
        },
        1: {
            transform: "translate(0%, 50vh) translateY(10%)",
        },
        2: {
            transform: "translate(0%, 0vh) translateY(0%) scale(1)",
            bottom: '60%', right: '40%',
            width: '40vmax', height: '40vmax'
        },
        3: {
            width: '50vmax', height: '50vmax',
            bottom: '55%', right: '50%',
            transform: "translate(33%, 0vh) translateY(43%) scale(0.5)",
        }
    },
    '.shapes .bottom-right': {
        0: {
            transform: "translate(0%, 0vh) translateY(0%)"
        },
        1: {
            transform: "translate(0%, -50vh) translateY(-50%)"
        },
        2: {
            width: '35vmax', height: '35vmax',
            top: '60%', right: '0%',
            transform: "translate(0%, -50vh) translateY(-150%) scale(1)"
        },
        3: {
            width: '50vmax', height: '50vmax',
            top: '55%', right: '50%',
            transform: "translate(67%, 0vh) translateY(-43%) scale(0.5)",
        }
    },
    '.shapes .top-right': {
        0: {
            transform: "translate(0%, 0vh) translateY(0%)",
            bottom: '70%', left: '55%',
        },
        0.9: {
            opacity: 1
        },
        1: {
            transform: "translate(0%, 0vh) translateY(-150%)",
            width: '30vmax', height: '30vmax',
            bottom: '55%', left: '50%'
        },
        2: {
            transform: "translate(0%, 0vh) translateY(-150%) scale(1)",
            opacity: 1,
            width: '50vmax',
            height: '50vmax',
        },
        3: {
            transform: "translate(-33%, 0vh) translateY(43%) scale(0.5)",
        },
    },
    '.shapes .bottom-left': {
        0: {
            transform: "translate(0%, 0vh) translateY(0%)",
            top: '50%', right: '60%'
        },
        0.9: {
            opacity: 1
        },
        1: {
            transform: "translate(0%, 0vh) translateY(-300%)",
            opacity: 0,
            top: '55%', right: '50%',
        },
        2: {
            transform: "translate(0%, 0vh) translateY(-300%) scale(1)",
            opacity: 0,
            width: '50vmax',
            height: '50vmax',
            'border-width': '35px',
        },
        3: {
            transform: "translate(33%, 0vh) translateY(-43%) scale(0.5)",
            opacity: 1,
            'border-width': '15px',
        },
    },
    '.shapes .center': {
        0: {
            'width': '50vmax',
            'height': '50vmax',
            'border-radius': '50%',
            'border-width': '25px',
        },
        1: {
            'border-radius': 0,
            'border-width': 0,
            'height': '100%',
            'width': '100%',
            transform: "translate(-50%, -50%) translateY(0%)"
        },
        2: {
            transform: "translateY(-100%)"
        }
    },
    '.shapes .background2': {
        0: {
            transform: "translateY(100%)"
        },
        1: {
            transform: "translateY(100%)"
        },
        2: {
            transform: "translateY(0)"
        },
        3: {
            transform: "translateY(-100%)"
        },
    }
};
