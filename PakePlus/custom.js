console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

document.addEventListener('click', hookClick, { capture: true })

// css filter
document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const element0 = document.querySelector('.cookie-consent');
                if (element0) {
                    element0.style.display = 'none';
                };const element1 = document.querySelector(' .gdpr-banner');
                if (element1) {
                    element1.style.display = 'none';
                };const element2 = document.querySelector(' .privacy-popup');
                if (element2) {
                    element2.style.display = 'none';
                };const element3 = document.querySelector(' .cc-window');
                if (element3) {
                    element3.style.display = 'none';
                };const element4 = document.querySelector(' [id*="consent"]');
                if (element4) {
                    element4.style.display = 'none';
                };const element5 = document.querySelector(' [class*="gdpr"]');
                if (element5) {
                    element5.style.display = 'none';
                };const element6 = document.querySelector(' [data-testid="tracker"]');
                if (element6) {
                    element6.style.display = 'none';
                };const element7 = document.querySelector(' iframe[src*="tracking"]');
                if (element7) {
                    element7.style.display = 'none';
                };const element8 = document.querySelector(' script[src*="analytics"]');
                if (element8) {
                    element8.style.display = 'none';
                };const element9 = document.querySelector(' [src*="pixel"]');
                if (element9) {
                    element9.style.display = 'none';
                };const element10 = document.querySelector(' [id^="gtm-"]');
                if (element10) {
                    element10.style.display = 'none';
                };const element11 = document.querySelector(' [class*="beacon"]');
                if (element11) {
                    element11.style.display = 'none';
                };const element12 = document.querySelector(' .user-opt-out');
                if (element12) {
                    element12.style.display = 'none';
                };const element13 = document.querySelector(' .tracking-consent');
                if (element13) {
                    element13.style.display = 'none';
                };const element14 = document.querySelector('
.ad-banner');
                if (element14) {
                    element14.style.display = 'none';
                };const element15 = document.querySelector(' .ads-wrapper');
                if (element15) {
                    element15.style.display = 'none';
                };const element16 = document.querySelector(' .ad-container');
                if (element16) {
                    element16.style.display = 'none';
                };const element17 = document.querySelector(' [id*="_ad_"]');
                if (element17) {
                    element17.style.display = 'none';
                };const element18 = document.querySelector(' [class*="ad-unit"]');
                if (element18) {
                    element18.style.display = 'none';
                };const element19 = document.querySelector(' .sponsored-card');
                if (element19) {
                    element19.style.display = 'none';
                };const element20 = document.querySelector(' .promo-popup');
                if (element20) {
                    element20.style.display = 'none';
                };const element21 = document.querySelector(' .affiliate-link');
                if (element21) {
                    element21.style.display = 'none';
                };const element22 = document.querySelector(' [data-ad-type]');
                if (element22) {
                    element22.style.display = 'none';
                };const element23 = document.querySelector(' iframe[src*="ads."]');
                if (element23) {
                    element23.style.display = 'none';
                };const element24 = document.querySelector(' [class^="adtech"]');
                if (element24) {
                    element24.style.display = 'none';
                };const element25 = document.querySelector(' .ad-placeholder');
                if (element25) {
                    element25.style.display = 'none';
                };const element26 = document.querySelector(' .ad-slot');
                if (element26) {
                    element26.style.display = 'none';
                };const element27 = document.querySelector(' .ad-overlay');
                if (element27) {
                    element27.style.display = 'none';
                };const element28 = document.querySelector(' .ad-interstitial');
                if (element28) {
                    element28.style.display = 'none';
                };const element29 = document.querySelector(' [data-ad-status]');
                if (element29) {
                    element29.style.display = 'none';
                };const element30 = document.querySelector(' .ad-wall');
                if (element30) {
                    element30.style.display = 'none';
                };const element31 = document.querySelector('
');
                if (element31) {
                    element31.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
