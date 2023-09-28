function article(nr)
{
    document.getElementById("s1").style.display="none";
    document.getElementById("s2").style.display="none";
    document.getElementById("s3").style.display="none";
    document.getElementById("s4").style.display="none";
    switch (nr)
    {
        case 1:
                document.getElementById("s1").style.display="inline";
        break;
        case 2:
                document.getElementById("s2").style.display="inline";
        break;
        case 3:
                document.getElementById("s3").style.display="inline";
        break;
        case 4:
                document.getElementById("s4").style.display="inline";
        break;
    }
}