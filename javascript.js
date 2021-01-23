
       // Soal nomor 1
        for(i=1 ; i <= 100 ; i++ ){
            console.log("User ke - " +i);
        };

        // Soal nomor 2
        for(x=0 ; x <= 18 ; x+=2){
            console.log(x);
        };

        // Soal nomor 3
        for(y=0 ; y <= 20 ; y++){    
    

    if(y % 2 == 0){
        console.log(y+ " - ini bilangan genap");
    } else {
        console.log(y+ " - ini bilangan ganjil");
    };

};     



        // Soal nomor 4
        let decision = confirm("Repeat this question?");
        let count = 0;


        if (decision==true){
            
            while(decision==true){
                count++;
                let decision = confirm("Repeat this question?");

                if (decision==false) {
                    desision = false;
                    alert("Pengulangan telah dilakukan sebanyak " +count+ " kali");
                    break;
                 }

            }
            
        }  else if (decision==false){
            alert("Pengulangan telah dilakukan sebanyak " +count+ " kali");
        }


        // Soal nomor 5
        let quiz = prompt("Sebutkan kepanjangan dari IB !?");

    


        while(quiz !== "impact byte"){

            if (quiz !== "impact byte"){
            
            let quiz = prompt("Sebutkan kepanjangan dari IB !?");

            } else if (quiz == "impact byte"){
                break;
            };

            alert ("Selamat, Jawaban anda Benar!");
            break;
        }


        alert ("Selamat, Jawaban anda Benar!");
     





 
