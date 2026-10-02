document.write("Wojciech <br>");


let a=-50 , b=50;
for(i=a;i<=b;i++)
{
	if(i!=b)
	{
		document.write(i+", ");
	}else
	{
		document.write(i);
	}
	
}
document.write("<br> _____________________________________________ <br>");
let k=3;
for(i=a;i<=b;i+=k)
{
	if(i+k>b)
	{
		document.write(i);
	}else
	{
		document.write(i+", ");
	}

}


