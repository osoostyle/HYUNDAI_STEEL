$(function(){
  //개인정보메뉴
  $(".btn_my_menu").click(function(){
    $(this).next(".my_quick_box").slideToggle(300);
  });

  //퀵메뉴
  $(".btn_quick_menu").click(function(){
    $(this).toggleClass("fold");
  });

  //검색어
  $(".gnb>li>a").click(function(){
    $(".gnb>li").removeClass('active');
    $(this).parent().toggleClass("active");
  });
  

  $(".select_multi_list :checkbox").on('click', function(){
    $(this).parent().toggleClass("checked");
  });

  // $(".select_btn").on('click', function(){
  //   $(this).next(".select_multi_list").toggleClass("active");
  // });

  
  // Select UI
	$('.select_div:not(.disabled) .select_btn').click(function() {
		$('.select_div').removeClass('active');
		$(this).parents('.select_div').toggleClass('active');
		return false;
	});
	$(".select_list li a").on("click", function() {
		var text = $(this).html();
		$(".select_list li").removeClass('on'); 
		$(this).parent().addClass('on');
		$(this).parents('.select_div').find('.select_btn').html(text);
		$(this).parents('.select_div').removeClass('active');
		return false;
	});
	$('body').click(function(event) {
		if (!$(event.target).closest(".select_div").length) {
		  $(".select_div").removeClass("active");
		}
	});


  $(".button_search").click(function(){
    $(this).toggleClass("on");
  });

  $(".btn_safe").click(function(){
    $(this).toggleClass("on");
  });

  $(".btn_f").on('click', function(){
    $(this).toggleClass("on");
    $(this).parent().children(".btn_f_all").removeClass("on");
  });
  $(".btn_f_all").on('click', function(){
    $(this).parent().children(".btn_f").removeClass("on");
    $(this).addClass("on");
  });

  // $(".btn-favorite").click(function(){
  //   $(this).toggleClass("on");
  // });

  $(".pr_message .more").click(function(){
    $(this).parent().next(".more_box").show();
  });
  $(".close-message").click(function(){
    $(this).parent(".more_box").hide();
  });

  $(".fold-table tr.tr_list .btn_arr_tbl").on("click", function(){
    $(this).parents(".tr_list").toggleClass("active").next(".tr_view").toggleClass("open");
  });

  $(".btn-txt").click(function(){
    $(this).parent(".r_txt_box, .m_txt_box").toggleClass("fold");
    $(this).text( $(this).text() == "더보기"?"접기":"더보기");
  });

  $('.btn-favorite').on("click",function(){
    if($(this).hasClass("on") === true) {
      $('.btn-favorite').removeClass('on');
      $('#favoriteMessage p').text("즐겨찾기를 해제했습니다.");
        $('#favoriteMessage').addClass('active');
        setTimeout(function(){
          $('#favoriteMessage').removeClass('active');
          
        },1500);
      } else {
        $('.btn-favorite').addClass('on');
        $('#favoriteMessage').addClass('active');
        $('#favoriteMessage p').text("즐겨찾기에 추가했습니다");
        setTimeout(function(){
          $('#favoriteMessage').removeClass('active');
          
        },1500);
      }
  });

  $('.btn-copyurl').on("click",function(){
      $('#copyMessage').addClass('active');
      setTimeout(function(){
        $('#copyMessage').removeClass('active');
      },1200);
  });

  $(".tab-link>li>a").on("click",function(){
    $(".tab-link>li").removeClass("on");
    $(this).parent().addClass("on");
  });  

  $(".payment_status").on("click",function(){
    $(".tr_process").hide();
    $(this).parent().next(".tr_process").slideDown();
  }); 

  $(".open-list-layer").click(function(e){
    $(".list-layer").toggle();
    e.preventDefault(); 
  }); 
  $(".btn-close-layer").click(function(){
    $(".list-layer").hide();
  }); 

  
  $(".list-layer li a").on("click",function(e){
    $(this).addClass("active");
    e.preventDefault(); 
  }); 
  $(".btn-close").on("click",function(){
    $(this).parent(".list-layer").hide();
  }); 

  $(".btn-array").click(function(){
    $(this).toggleClass("active");
  });

  
  

});


function portletTab() {
  $('.p_tab_cont').eq(0).show(0);
  $('.p_tab>li>a').on('click', function (e) {
    var idx = $(this).parent('li').index();
    $(this).parents().parent().children('.p_tab_cont').hide();
    $(this).parents().parent().children('.p_tab_cont').eq(idx).show();
    $(this).parents().children('.p_tab>li').removeClass('on');
    $(this).parent('li').addClass('on');
    e.preventDefault();
  });
}

function mainChartZoom() {
  $(".btn_zoom").click(function(){
    $(".modal_wrap").addClass("active");
    //$("body").css("overflow","hidden");
  });
  $(".modal .btn_close").click(function(){
    $(".modal_wrap").removeClass("active");
    //$("body").css("overflow","unset");
  });

}




//검색필터
$(function(){
  //검색어
  $(".srch_keyword").click(function(){
    $(this).addClass("active");
  });

  //Reset Input
	$('.btn_del_keyword').click(function() {
		$(this).parent().children('input').val('');
	});
  $('.btn_del_keyword').click(function() {
		$(this).parent().children('textarea').val('');
	});


  //표준종류&작성공장
  $(".srch_standard .label,.srch_factory .label").on("click", function(e){
    $(this).next().next(".srch_modal_box").addClass("active");
  });
  $(".srch_modal_box .btn_modal_close").on("click", function(e){
    $(this).parent(".srch_modal_box").removeClass("active");
  });
  // $(".selected_item .del").on("click", function(e){
  //   $(this).parent(".selected_item").hide();
  // });

  $(".btn_filter").click(function(e){
    //$(".search_filter_box").addClass("open");
    $(".srch_modal_box").removeClass("active");
    $(this).parent().next(".search_filter_box").slideDown();
    e.preventDefault();
  });
  $(".search_filter_box .btn_modal_close").on("click", function(e){
   // $(this).parent(".search_filter_box").removeClass("open");
   $(".search_filter_box").slideUp();
  });

  $(".p_edit_top").mouseenter(function(){
    $(this).next(".drag_div").fadeIn(100);
  })
  
});

//Tree
function treemap () {
    // Hide all child UL elements.
    $('ul.tree ul').hide();
  
    // Iterate each LI that contains a UL as immediate child.
    $('.tree li:has(> ul)').each(function () {
      const $parentLi = $(this);
      const $subUl = $parentLi.children('ul');
      const $toggleIcon = $('<i class="tree-toggle-icon"></i>');

      // Add class for styling and append toggle icon.
      $parentLi.addClass('has-children').prepend($toggleIcon);
  
      // Attach event handler to the toggle icon.
      $toggleIcon.on('click', function () {
        //const isExpanded = $(this).text() === '+';
        const isExpanded = $(this).toggleClass("open");
        //$(this).text(isExpanded ? '-' : '+');
        $subUl.slideToggle('fast');
      });
    });

    $('.tree li>span').each(function () {
      const $treeLiSpan = $(this);
      const $hoverBg = $('<div class="bg_hover"></div>');

      $treeLiSpan.on('mouseenter', function () {
        $(this).parent("li").prepend($hoverBg);
      });
    });

    $(".tree li").mouseenter(function(){
      $(".tree li").removeClass("on");
      $(this).addClass("on");
    });
    $(".tree li").mouseleave(function(){
      $(this).removeClass("on");
    })


    //tree 우클릭 이벤트
      $('.tree li>span').contextmenu(function(event) {
        event.preventDefault();
        //$(".tree_editPOP").clone().appendTo(".first");
        //$(".tree_editPOP").addClass("on");

        var $test = $(this);
        $('.tree_editPOP').insertAfter($test);
        $(this).next().addClass('on');
        $(this).parent().addClass('on');

        $(this).append("<i class='arr_downtree'></i>");
      });
      
      $(".tree_editPOP").mouseleave(function(){
        $(this).removeClass("on");
        $('.arr_downtree').hide();
      })
}


// 아코디언 메뉴
$(function(){
  $(".accordion-link").click(function() {
		$(this).parent().toggleClass("active");
	});
});


$(function(){
  $('.t-btn').on("click",function(){
    $('.t-btn').removeClass('active');
    $(this).addClass('active');
  });
});


function toggleButton() {
  $('.toggle-div').eq(0).show(0);
  $('.toggle-button .t-btn').on('click', function (e) {
    var idx = $(this).index();
    $(this).parent().parent().children('.toggle-div').hide();
    $(this).parent().parent().children('.toggle-div').eq(idx).show();
    //$(this).removeClass('active');
    //$(this).addClass('active');
    e.preventDefault();
  });
}



//이미지 업로드 컴포넌트
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result;
        $('.upImg').show();
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById('preview').src = "";
  }
}


//문서 구분 목록(302)
$(function(){
  $(".btn_edit").click(function() {
    $(this).parent().parent().parent('.docuBox_drag').addClass('editIng');
	});
});

$(function(){
  $(".btn_reset").click(function() {
    $(this).parent().parent().parent().parent('.docuBox_drag').removeClass('editIng');
	});
});

$(function(){
  $(".btn-del").click(function() {
    $(this).parent('.docuBox_drag').hide();
	});
});



//평가 항목 추가
$(function(){
  $(".btn-addeval").click(function() {
    $('.add_eval_div').removeClass('dimmed');
	});
});

$(function(){
  $(".btn-del").click(function() {
    $(this).parent().parent().parent('.add_eval_div').addClass('dimmed');
	});
});

$(function(){
  $(".btn-del").click(function() {
    $(this).parent('.eval_contBox').hide();
	});
});


