$(".beefsection").hide();
$(".mshaoesection").hide();
$(".shawrmasection").hide();
$(".mkblatsection").hide();
$(".contactsection").hide();




//                      beef section 
$(".beef").click(function(){
    if (($(".beefsection").css('visibility') === 'hidden')){
        $(".beefsection").show();
        $(".beefsection").css('visibility','visible');
        $(".beef").css("box-shadow","rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px");
        $(".beef").css('font-size','38px');


        $(".shoe").hide();
        $(".shawrma").hide();
        $(".mkblat").hide();
        $(".contact").hide();
         


        $(".mshaoesection").hide();
        $(".mshaoesection").css('visibility','hidden');
        $(".shoe").css("box-shadow","");
        $(".shoe").css('font-size','');

        $(".shawrmasection").hide();
        $(".shawrmasection").css('visibility','hidden');
        $(".shawrma").css("box-shadow","");
        $(".shawrma").css('font-size','');

        $(".mkblatsection").hide();
        $(".mkblatsection").css('visibility','hidden');
        $(".mkblat").css("box-shadow","");
        $(".mkblat").css('font-size','');

        $(".contactsection").hide();
        $(".contactsection").css('visibility','hidden');
        $(".contact").css("box-shadow","");
        $(".contact").css('font-size','');
    } else if (($(".beefsection").css('visibility') === 'visible')){
        $(".beefsection").hide();
        $(".beefsection").css('visibility','hidden');
        $(".beef").css("box-shadow","");
        $(".beef").css('font-size','');

        $(".shoe").show();
        $(".shawrma").show();
        $(".mkblat").show();
        $(".contact").show();
    }
})
//                      mshaoe section 
$(".shoe").click(function(){
    if (($(".mshaoesection").css('visibility') === 'hidden')){
        $(".mshaoesection").show();
        $(".mshaoesection").css('visibility','visible');
        $(".shoe").css("box-shadow","rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px");
        $(".shoe").css('font-size','38px');


        $(".beef").hide();
        $(".shawrma").hide();
        $(".mkblat").hide();
        $(".contact").hide();


        $(".beefsection").hide();
        $(".beefsection").css('visibility','hidden');
        $(".beef").css("box-shadow","");
        $(".beef").css('font-size','');

        $(".shawrmasection").hide();
        $(".shawrmasection").css('visibility','hidden');
        $(".shawrma").css("box-shadow","");
        $(".shawrma").css('font-size','');

        $(".mkblatsection").hide();
        $(".mkblatsection").css('visibility','hidden');
        $(".mkblat").css("box-shadow","");
        $(".mkblat").css('font-size','');

        $(".contactsection").hide();
        $(".contactsection").css('visibility','hidden');
        $(".contact").css("box-shadow","");
        $(".contact").css('font-size','');
    } else if (($(".mshaoesection").css('visibility') === 'visible')){
        $(".mshaoesection").hide();
        $(".mshaoesection").css('visibility','hidden');
        $(".shoe").css("box-shadow","");
        $(".shoe").css('font-size','');
        $(".beef").show();
        $(".shawrma").show();
        $(".mkblat").show();
        $(".contact").show();
    }
})
//                      shawrma section 
$(".shawrma").click(function(){
    if (($(".shawrmasection").css('visibility') === 'hidden')){
        $(".shawrmasection").show();
        $(".shawrmasection").css('visibility','visible');
        $(".shawrma").css("box-shadow","rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px");
        $(".shawrma").css('font-size','38px');

        $(".mshaoesection").hide();
        $(".mshaoesection").css('visibility','hidden');
        $(".shoe").css("box-shadow","");
        $(".shoe").css('font-size','');

        $(".beefsection").hide();
        $(".beefsection").css('visibility','hidden');
        $(".beef").css("box-shadow","");
        $(".beef").css('font-size','');

        $(".mkblatsection").hide();
        $(".mkblatsection").css('visibility','hidden');
        $(".mkblat").css("box-shadow","");
        $(".mkblat").css('font-size','');

        $(".contactsection").hide();
        $(".contactsection").css('visibility','hidden');
        $(".contact").css("box-shadow","");
        $(".contact").css('font-size','');
        $(".shoe").hide();
        $(".beef").hide();
        $(".mkblat").hide();
        $(".contact").hide();
    } else if (($(".shawrmasection").css('visibility') === 'visible')){
        $(".shawrmasection").hide();
        $(".shawrmasection").css('visibility','hidden');
        $(".shawrma").css("box-shadow","");
        $(".shawrma").css('font-size','');
        $(".shoe").show();
        $(".beef").show();
        $(".mkblat").show();
        $(".contact").show();
    }
})
//                      mkblat section 
$(".mkblat").click(function(){
    if (($(".mkblatsection").css('visibility') === 'hidden')){
        $(".mkblatsection").show();
        $(".mkblatsection").css('visibility','visible');
        $(".mkblat").css("box-shadow","rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px");
        $(".mkblat").css('font-size','38px');

        $(".mshaoesection").hide();
        $(".mshaoesection").css('visibility','hidden');
        $(".shoe").css("box-shadow","");
        $(".shoe").css('font-size','');

        $(".beefsection").hide();
        $(".beefsection").css('visibility','hidden');
        $(".beef").css("box-shadow","");
        $(".beef").css('font-size','');

        $(".shawrmasection").hide();
        $(".shawrmasection").css('visibility','hidden');
        $(".shawrma").css("box-shadow","");
        $(".shawrma").css('font-size','');

        $(".contactsection").hide();
        $(".contactsection").css('visibility','hidden');
        $(".contact").css("box-shadow","");
        $(".contact").css('font-size','');
        $(".shawrma").hide();
        $(".shoe").hide();
        $(".beef").hide();
        $(".contact").hide();
    } else if (($(".mkblatsection").css('visibility') === 'visible')){
        $(".mkblatsection").hide();
        $(".mkblatsection").css('visibility','hidden');
        $(".mkblat").css("box-shadow","");
        $(".mkblat").css('font-size','');
        $(".shawrma").show();
        $(".shoe").show();
        $(".beef").show();
        $(".contact").show();
    }
})
//                      contact section 
$(".contact").click(function(){
    if (($(".contactsection").css('visibility') === 'hidden')){
        $(".contactsection").show();
        $(".contactsection").css('visibility','visible');
        $(".contact").css("box-shadow","rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px");
        $(".contact").css('font-size','38px');

        $(".mshaoesection").hide();
        $(".mshaoesection").css('visibility','hidden');
        $(".shoe").css("box-shadow","");
        $(".shoe").css('font-size','');

        $(".beefsection").hide();
        $(".beefsection").css('visibility','hidden');
        $(".beef").css("box-shadow","");
        $(".beef").css('font-size','');

        $(".shawrmasection").hide();
        $(".shawrmasection").css('visibility','hidden');
        $(".shawrma").css("box-shadow","");
        $(".shawrma").css('font-size','');

        $(".mkblatsection").hide();
        $(".mkblatsection").css('visibility','hidden');
        $(".mkblat").css("box-shadow","");
        $(".mkblat").css('font-size','');
        $(".mkblat").hide();
        $(".shawrma").hide();
        $(".shoe").hide();
        $(".beef").hide();
    } else if (($(".contactsection").css('visibility') === 'visible')){
        $(".contactsection").hide();
        $(".contactsection").css('visibility','hidden');
        $(".contact").css("box-shadow","");
        $(".contact").css('font-size','');
        $(".mkblat").show();
        $(".shawrma").show();
        $(".shoe").show();
        $(".beef").show();
    }
})


