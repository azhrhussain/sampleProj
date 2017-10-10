
$(document).ready(function () {
$("a[href='#about-company']").click(function() {
	$("html, body").animate({scrollTop: $('#about-company').offset().top }, 2000);
  return false;
});	
	
$(".btn-scrollTop").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(window).on("scroll", function(){
	if( $(window).scrollTop() > 15){
	$(".btn-scrollTop").fadeIn("slow");
	}
	else $(".btn-scrollTop").fadeOut();
	});


    $(".my-dropdown").on("mouseenter", function () {
        $(this).children(".my-dropdown-menu").removeClass("hidden");
    });

    var mainslider = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        dots: false,
        focusOnSelect: true,
        asNavFor: '.tab-slider',
        centerMode: false,
        arrows: false,
        autoplay: true,
        infinite: true
    };
    var tabslider = {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        arrows: false,
        fade: true,
        infinite: true
    };




    $('.main-slider').on('init', function (e, slick) {
        var $firstAnimatingElements = $('div.item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    $('.main-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        
        var $animatingElements = $('div.item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
        console.log('before change');
        ;
    });
    $('.main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        // finally let's do this after changing slides
        var $animRemoveCurrent = $('div.item[data-slick-index="' + currentSlide + '"]').find("[data-remove]");
        
         removeAnimations($animRemoveCurrent);
        console.log('after change');
    });

    $('.main-slider').slick(mainslider);
    $('.tab-slider').slick(tabslider);

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }
    function removeAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('remove');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }




    //scrollMagic


    var stFun = function () {
        $(".circle-img").removeClass("spinAnim");
        $(".counter").html("");
    }

    var myFun = function () {
        $(".circle-img").addClass("spinAnim");
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

            {

                duration: 2200,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });



        });
    }



    var controller = new ScrollMagic.Controller();

    var feature = $(".features");

    var feature_box = $(".feature-box");

    var op_list = $(".op-list li");
    var mu_section = $(".mu-dashboard");

    var mdv_section = $(".mdvff");
    var mdv_heading = $("#mdv-heading ");
    var points_list = $(".mdvpoints-list li");
    


    var provider_tween = TweenMax.fromTo("#customizable", 2, { left: -522, opacity: 0 }, { left: 0, opacity: 1, onStart: stFun, onComplete: myFun });

    var patient_tween = TweenMax.fromTo("#affordable", 2, { bottom: -522, opacity: 0 }, { bottom: 0, opacity: 1 });
    var valuable_tween = TweenMax.fromTo("#scalable", 2, { bottom: -522, opacity: 0 }, { bottom: 0, opacity: 1 });
    var location_tween = TweenMax.fromTo("#valuable", 2, { right: -522, opacity: 0 }, { right: 0, opacity: 1 });

    var boxes1_tl = new TimelineLite();

    boxes1_tl.staggerFrom(feature_box, 1.2, { ease: Expo.easeInOut, x: "-100%", opacity: 0 }, 0.1);

    //mu tween

    var op_list_tl = new TimelineLite();
    op_list_tl.staggerFrom(op_list, 2, { top: -522, opacity: 0 }, { top: 0, opacity: 1 });

    var mu_tab_tween = TweenMax.fromTo('.tab-container', 1, { marginTop: 522, opacity: 0 }, { marginTop: "7.15em", opacity: 1 });

    //mdv tween
    var mdv_heading_tween = TweenMax.from(mdv_heading, 2, { ease: Bounce.easeOut, y: -200 });

    //var points_list_tl = new TimelineMax();
    //points_list_tl.staggerFrom(points_list, 1.2, { translateX: "-121%", opacity: 0, ease: Elastic.easeOut.config(1.1, 0.4) }, 0.1);

    var points_list_tl = TweenMax.staggerFrom(points_list, 0.2, { css: { transform: "translateX(-630px)" }, opacity: 0, delay: 0.5, ease: Back.easeOut }, 0.2);

    // var patient_tab1_tween = TweenMax.staggerFrom(".tabimg", 1,{className:"+=active"} , 0.1);

    var zIndexCh = TweenMax.from(".tab-outer", 0.6, { css: { zIndex: "5" },delay: 0.2 } );

    var provider_scene = new ScrollMagic.Scene({
        triggerElement: feature,
        duration: 480,
    }).setTween(provider_tween);

    var patient_scene = new ScrollMagic.Scene({
        triggerElement: feature,
        duration: 520,
    }).setTween(patient_tween);
var valuable_scene = new ScrollMagic.Scene({
        triggerElement: feature,
        duration: 520,
    }).setTween(valuable_tween);
    var location_scene = new ScrollMagic.Scene({
        triggerElement: feature,
        duration: 530,
    }).setTween(location_tween);

    var boxes1_scene = new ScrollMagic.Scene({
        triggerElement: "#valuable",
        duration: 0
    }).setTween(boxes1_tl);


    //mu section

    var mu_scene = new ScrollMagic.Scene({
        triggerElement: ".mu-dashboard",
        duration: 0
    }).setTween(op_list_tl);

    var mu_tab_scene = new ScrollMagic.Scene({
        triggerElement: ".mu-dashboard",
        duration: 0
    }).offset(0).setTween(mu_tab_tween);

    //mdv

    var mdv_heading_scene = new ScrollMagic.Scene({
        triggerElement: ".mdvision",
        duration: 0
    }).offset(50).setTween(mdv_heading_tween);

    var points_list_scene = new ScrollMagic.Scene({
        triggerElement: ".mdvision",
        duration: 0
    }).offset(90).setTween(points_list_tl);


    //patient

    var patient_tab_scene = new ScrollMagic.Scene({
        triggerElement: ".patient-checkin",
        duration: 0
    }).offset(200).setClassToggle(".tabimg", "active").setTween(zIndexCh);


    controller.addScene([
        provider_scene,
        patient_scene,
		valuable_scene,
        location_scene,
        boxes1_scene,
        mu_scene,
        mu_tab_scene,
        mdv_heading_scene,
        points_list_scene,
        patient_tab_scene
    ]);








    //mu dashboard
    var $hoverMe = $('.az');
    var $colorOverlay = $('.color-overlay');
    var $whiteOverlay = $('.white-overlay');
    var isAnimated = false;

    $hoverMe.on('mouseenter', showImage);
    $hoverMe.on('mouseleave', hideImage);

    $(".op-list .border-line-ef").on('mouseenter', function () {
        var targetEl = $(this).data().target;
        $(".mu-db img").addClass("hidden");
        $(targetEl).removeClass("hidden");
        //console.log(this);
        //$('.white-overlay').css({ "background": " url(" + $(targetEl).attr("src") + ") no-repeat", "background-size": "cover" });
        showImage();

    });
    $(".op-list .border-line-ef").on('mouseleave', function () {
        $(".mu-db img").addClass("hidden");
        var targetEl = $(this).data().target;
        $(targetEl).removeClass("hidden");

        // $('.white-overlay').css({ "background": " url(" + $(targetEl).attr("src") + ") no-repeat", "background-size": "cover" });
        hideImage();
    });

    function showImage() {
        if (isAnimated) {
            //TweenMax.killAll();
            $whiteOverlay[0].style.transformOrigin = "left 50% 0px";
            isAnimated = false;
        } else {
            isAnimated = true;
        }

        TweenMax.to($whiteOverlay, 1,
            { scaleX: 0, ease: Quart.easeInOut }
        );
        TweenMax.fromTo($colorOverlay, 1,
            { scaleX: 1 },
            {
                scaleX: 0, ease: Quart.easeInOut, delay: 0.2, onComplete: function () {
                    $whiteOverlay[0].style.transformOrigin = "left 50% 0px";
                    isAnimated = false;
                }
            }
        );
    }

    function hideImage() {
        if (isAnimated) {
            //TweenMax.killAll();
            isAnimated = false;
            $whiteOverlay[0].style.transformOrigin = "right";
        } else {
            isAnimated = true;
        }

        TweenMax.to($whiteOverlay, 0.5, {
            scaleX: 1,
            ease: Quart.easeInOut,
            onComplete: function () {
                $whiteOverlay[0].style.transformOrigin = "right";
                isAnimated = false;
            }
        });
    }

});



$('#contact').bootstrapValidator({
    trigger: 'blur',
    fields: {
        name: {
            validators: {
                notEmpty: {
                    message: 'Your name is required'
                },
                regexp: {
                    regexp: /^[a-zA-Z ]+$/,
                    message: 'Your name cannot have numbers or symbols'
                }
            }
        },

        email: {
            validators: {
                notEmpty: {
                    message: 'The email is required'
                },
                emailAddress: {
                    message: 'The input is not a valid email address'
                }
            }
        },
        contactno: {
            validators: {
                notEmpty: {
                    message: 'The phone number is required'
                },
                regexp: {
                    regexp: /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/,
                    message: 'The input is not a valid phone number'
                }
            }
        },
        city: {
            validators: {
                notEmpty: {
                    message: 'City name is required'
                },
                regexp: {
                    regexp: /^[a-zA-Z ]+$/,
                    message: 'City name cannot have numbers or symbols'
                }
            }
        },
        country: {
            validators: {
                notEmpty: {
                    message: 'Country name is required'
                },
                regexp: {
                    regexp: /^[a-zA-Z ]+$/,
                    message: 'Country name cannot have numbers or symbols'
                }
            }
        }
    }
})
 .on('error.field.bv', function (e, data) {
     // change the data-bv-trigger value to keydown
     $(e.target).attr('data-bv-trigger', 'keydown');
     // destroy the plugin
     // console.info(data.bv.getOptions());
     data.bv.destroy();
     // console.info(data.bv.getOptions());
     // initialize the plugin
     $('#contact').bootstrapValidator(data.bv.getOptions());
 });


$('#request-a-demo-frm').bootstrapValidator({
    fields: {
        firstName: {
            validators: {
                stringLength: {
                    min: 2,
                },
                notEmpty: {
                    message: 'Please enter your first name'
                }
            }
        },
        lastName: {
            validators: {
                stringLength: {
                    min: 2,
                },
                notEmpty: {
                    message: 'Please enter your last name'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'Please enter your email address'
                },
                emailAddress: {
                    message: 'Please enter a valid email address'
                }
            }
        },
        phoneNumber: {
            validators: {
                notEmpty: {
                    message: 'Please supply your phone number'
                },
                phone: {
                    country: 'Number',
                    message: 'Please supply a vaild phone number with area code'
                }
            }
        },

        needsSel: {
            validators: {
                notEmpty: {
                    message: 'Please select an option'
                }
            }
        },
        representSel: {
            validators: {
                notEmpty: {
                    message: 'Please select an option'
                }
            }
        },
        physiciansSel: {
            validators: {
                notEmpty: {
                    message: 'Please select an option'
                }
            }
        }
    }
})
               .on('success.form.bv', function (e) {
                   $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                   $('#request-a-demo-frm').data('bootstrapValidator').resetForm();


               });