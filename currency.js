function chuyenTien() {
    let a=document.getElementById("amt").value;
    let b=document.getElementById("fcr").value;
    let c=document.getElementById("tcr").value;
    let d=a*c/b;
    document.getElementById("result").innerHTML=d;

}