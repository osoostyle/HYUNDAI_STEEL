

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


