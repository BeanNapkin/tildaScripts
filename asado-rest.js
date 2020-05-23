    function onContentLoaded(callback) {
        document.addEventListener("DOMContentLoaded", callback);        
    }

    function checkChanges() {
        let active = document.querySelector('#rec194408020 .t-width t-width_100');
        if (active) {
            var leftPos = active.offsetLeft;
            document.getElementsByClassName('t-store__parts-switch-wrapper')[0].scrollLeft = leftPos;
            window.activeStoreCategoryObserver.disconnect();
        }
    }

    function observeChanges(element, callback) {
        let observer = new MutationObserver(callback);
        observer.observe(element, { childList: true, subtree: true });
        return observer;
    }

    onContentLoaded(function() {
        console.log('onContentLoaded');
        let iframe = document.querySelector('#rec194408020 .t-width.t-width_100 iframe');
        // window.activeStoreCategoryObserver = observeChanges(
        //     document.querySelector('#rec194408020 .t-width.t-width_100'),
        //     function(mutations) {
        //         console.log('changes')
        //         console.log(document.querySelector('iframe'));
        //     });
    });
    
