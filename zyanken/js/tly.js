// JSファイルをわけました
// テスト
// alert(11111);


// じゃんけんのクリック
    // グーをクリックしたら
    $("#gu_btn").on("click", function(){
        const comp = Math.ceil(Math.random()*3 );
  
      if(comp == 1 ){
          $("#pc_hands").text("グー");
          $("#judgment").text("あいこです");
          $("#jazimentimg").attr("src","img/guu.png");
          console.log("グー1結果テキスト文字はでました");
          $("#judgment_kekka").attr("src","img/aiko.png");
          console.log("グー1結果の絵はでました");
      }else if(comp == 2 ){
          $("#pc_hands").text("チョキ");
          $("#judgment").text("勝ちです"); 
          $("#jazimentimg").attr("src","img/cyoki.png");  
          console.log("グー2結果テキスト文字はでました"); 
          $("#judgment_kekka").attr("src","img/kachi.png");
          console.log("グー2結果の絵はでました");
      }else if(comp == 3 ){
          $("#pc_hands").text("パー");
          $("#judgment").text("負けです");
          $("#jazimentimg").attr("src","img/paa.png"); 
          console.log("グー3結果テキスト文字はでました");
          $("#judgment_kekka").attr("src","img/make.png");
          console.log("グー3結果の絵はでました");
      }
      });
      
      // チョキをクリックしたら
      $("#cho_btn").on("click", function(){
          const comp = Math.ceil(Math.random()*3 );
  
      if( comp == 1 ){
          $("#pc_hands").text("グー");
          $("#judgment").text("負けです");
          $("#jazimentimg").attr("src","img/guu.png");
          console.log("チョキ1結果テキスト文字はでました");
          $("#judgment_kekka").attr("src","img/make.png");
          console.log("チョキ1結果の絵はでました");
      }else if( comp == 2 ){
          $("pc_hands").text("チョキ");
          $("#judgment").text("あいこです");
          $("#jazimentimg").attr("src","img/cyoki.png"); 
          console.log("チョキ2結果テキスト文字はでました");
          $("#judgment_kekka").attr("src","img/aiko.png");
          console.log("チョキ2結果の絵はでました");
  
      }else if( comp == 3 ){
          $("#pc_hands").text("パー");
          $("#judgment").text("勝ちです");
          $("#jazimentimg").attr("src","img/paa.png"); 
          console.log("チョキ3結果テキスト文字はでました");
          $("#judgment_kekka").attr("src","img/kachi.png");
          console.log("チョキ3結果の絵はでました");
      }
  });
  
      // パーをクリックしたら
      $("#par_btn").on("click", function(){
          const comp = Math.ceil(Math.random()*3 );
      if(comp==1){
          $("#pc_hands").text("グー");
          $("#judgment").text("勝ちです");
          $("#jazimentimg").attr("src","img/guu.png");
          console.log("パー1結果テキスト文字はでました");
          $("#judgment_kekka").attr("src","img/kachi.png");
          console.log("パー1結果の絵はでました");
      }else if(comp==2){
          $("#pc_hands").text("チョキ");
          $("#judgment").text("負けです");
          $("#jazimentimg").attr("src","img/cyoki.png"); 
          console.log("パー2結果テキスト文字はでました");
          $("#judgment_kekka").attr("src","img/make.png");
          console.log("パー1結果の絵はでました");
      }else if(comp==3){
          $("#pc_hands").text("パー");
          $("#judgment").text("あいこです");
          $("#jazimentimg").attr("src","img/paa.png"); 
          console.log("パー3結果テキスト文字はでました");
          $("#judgment_kekka").attr("src","img/aiko.png");
          console.log("パー1結果の絵はでました");
      }
   });