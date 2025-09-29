//-----------------------------------------------

export class slspHomeDeliveryLabelController {
    constructor() {
        this.observer = null;
    }

    $doCheck() {
        // Beobachte den Radiobutton auf Klassenänderungen
        const radioButton = document.querySelector('md-radio-button[value="pickupAtLibrary"]');
        const label = document.querySelector('#homeDeliveryLabel');
        if (radioButton && label) {
            // MutationObserver für Sichtbarkeit
            if (!this.observer) {
                this.observer = new MutationObserver(() => {
                    if (radioButton.classList.contains('md-checked')) {
                        label.style.display = 'none';
                    } else {
                        label.style.display = 'block';
                    }
                });
                this.observer.observe(radioButton, { attributes: true, attributeFilter: ['class'] });
            }
            // Initialer Zustand
            if (radioButton.classList.contains('md-checked')) {
                label.style.display = 'none';
            } else {
                label.style.display = 'block';
            }

            // Label verschieben
            const labelLocation = document.querySelector('.form_item[ng-if="$ctrl.showHomeDelivery"]');
            if (labelLocation && labelLocation !== label.parentNode) {
                labelLocation.appendChild(label);
            }
        }
    }

    $onDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

   
}

slspHomeDeliveryLabelController.$inject = [];