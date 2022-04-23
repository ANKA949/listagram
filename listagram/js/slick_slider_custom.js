    $('.for_slick_slider').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     dots: false,
     autoplay: false,
     autoplaySpeed: 2000,
     //=   Burada sağ sol butonlar için stillendirme yapılabilir son eklenen left/right etiketleri ile css kodları yazılabilir   =*/
     prevArrow:'',
     nextArrow:'',
     //=   dots içinde sadece css kodu olması yeterli olacaktır '.slick-dots  normal' - '.slick-dots .slick-active aktif olan için'   =*/
});


//   select main search
        $(document).ready(function(){
            $('.list').click(function(){
                const value = $(this).attr('data-filter');
                if (value == 'all'){
                    $('.itemBox').show('1000');
                }
                else{
                    $('.itemBox').not('.'+value).hide('1000');
                    $('.itemBox').filter('.'+value).show('1000');
                }
            })
            // add active class on selected item
            $('.list').click(function(){
                $(this).addClass('active').siblings().removeClass('active');
            })
        })

//  Top Contanct scroll down delet

        window.addEventListener("scroll", function(){
            var header = document.querySelector(".top-contact");
            header.classList.toggle("displaynone", window.scrollY > 100);
        })