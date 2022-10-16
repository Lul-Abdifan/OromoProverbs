const ProverbInOromic =document.querySelector('.ProverbInOromic');
const ProverbInEnglish =document.querySelector('.ProverbInEnglish');
const btn =document.getElementById('new-Proverb');
const proverbs =[{
    EnglishProverb:" Nata ngabbatanu yada gabbatu.",
    OromicProverb:'Upon food one does not grow fat; upon thought one fatten.'
},
{
    EnglishProverb:" Egienif gabin bode adiemtu",
    OromicProverb:'The tail and repentance go behind.'
},
{
    EnglishProverb:"Kan qufe damma tufa.",
    OromicProverb:'He who is sated, spits out honey.'
},
{
    EnglishProverb:" Bunaaf mooti afaan duwwaa hindubbisan",
    OromicProverb:'Coffee and the king, with the mouth alone they do not talk'
},
{
    EnglishProverb:"  Kan caba tufate agabu bula",
    OromicProverb:'He who has scorned the piece of bread will pass the night fasting.'
},
{
    EnglishProverb:"Otu nubatin quba ngubbatin",
    OromicProverb:'If thou hast not examined, do not burn thy finger.'
},
{
    EnglishProverb:"Otu dullacci giru gorbi duti.",
    OromicProverb:'While the old cow lives, the calf dies.'
},
{
    EnglishProverb:"Namni dufu dubbin dufa",
    OromicProverb:'If a man comes, a quarrel comes.'
},
{
    EnglishProverb:" Hidin gadantu ise olantu tufati. ",
    OromicProverb:'The lower lip scorns the upper lip.'
},];
btn.addEventListener('click',function(){
 const random =Math.floor(Math.random()*proverbs.length);
  
    ProverbInOromic.innerText =proverbs[random].EnglishProverb;
    ProverbInEnglish.innerText =proverbs[random].OromicProverb;
})
