console.log("*****FOR*****");

// const n = +prompt("Enter n:")
// let toplam = 0;
// for(let i = 1; i <= n; i++){
//     // toplam = toplam + i;
//     toplam += i;
//     console.log(toplam, i);
// }
// console.log("SONUC", toplam);

// 0-100 arasında 10 tane rastgele tam sayı üreten 10 tane sayı
//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

// for(let i = 1 ;i <= 10; i++){
//     const rastgele = Math.round(Math.random()*10);
//     console.log(rastgele);
// }

//Asal Sayı
//Bayrak Modeliyle Çözüldü

// const number = +prompt("Enter a number")
// let asal = true;

// if( number <= 1 ){
//     alert("Enter a number greater than 1");
// }else{
//     for(let i = 2 ; i< number ; i++){
//         if (number % i === 0){
//             asal = false;
//             break;
//         } 
//     }
//     const sonuc = asal === true ? "Asaldır" : "Asal Degıldır";
//     console.log(`${number} ${sonuc}`)
// }

//WHILE

// let number = +prompt("Enter a number")

// while( number < 0 || number > 100){
//     console.log("number 0-100 should be between");
//     number = +prompt("Please enter a number")
// }
// console.log("You entered number:", number);

//DO WHILE
//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz


// let number;
// do{ 
//     number = +prompt("Enter a number")
//     if (number < 0 || number){console.log("number 0-100 should be between");
//     }
// }while( number < 0 || number > 100){
//     // console.log("number 0-100 should be between");
//     // number = +prompt("Please enter a number");
// }

// console.log("You entered number:", number);


//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// let hak = 5;
// const rastgele = Math.round(Math.random()*100);
// console.log(rastgele);

// let tahmin;
// do{
//     const tahmin = +prompt("Lutfen 0-100 arasında bir tahmin giriniz")
//     hak -=1;
    // if(tahmin === rastgele){
    //     console.log(`Tebrikler ${5 -hak} defada bildiniz.`);
    //     break;
    // }else if(tahmin < rastgele){
    //     console.log("ARTTIR ");
    // }else{
    //     console.log("AZALT");
    // }
// }while(hak > 0);


// if (tahmin !== rastgele){
//     console.log("Uzgunuz oyunu kaybettiniz");
// }


//Assigmen-2

// let due = 5;
// const randomNumber = Math.round(Math.random()*100);
// console.log(randomNumber);
// let prediction;
let again;

// do{
// do{
//     prediction = +prompt("Please enter a guess between 0-100");
//     due -= 1;
//     if(prediction === randomNumber){
//         console.log(`Congratulations, you know ${5 - due} times.`);
//         break;
//     }else if(prediction < randomNumber){
//         console.log("increase ⬆️");
//     }else{
//         console.log("decrease ⬇️");
//     }

// }while(due > 0);

// if (prediction !== randomNumber){
//      console.log("Sorry you lost the game");
// }

//     again = prompt("Do you want to play again : Y/N");
//     if(again == "Y" || "y"){
//         again = 1
//         due = 5
//     }else{
//         again = 0
//     }

// }while("")
    let Y = 1;
    let y = 1;
    again = prompt("Do you want to play again : Y/N");
    if(again === Y || y){
         again = 1
         due = 5
    }else{
        again = 0
    }
    console.log(again)

