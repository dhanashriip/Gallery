using System;
using System.Collection.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace ConsoleApplication8
{
	class Program
	{
		static void Main(String[]args)
		{
			Console.WriteLine("enter the side 1:");
			double side1=
			Convert.ToDouble(Console.ReadLine());
			Console.WriteLine("enter the side 2:");
			double side2=
			Convert.ToDouble(Console.ReadLine());
			Double Hypotenuse=Math.Sqrt(Math.Pow(1,2)+Math.Pow(side2,2));
			Console.WriteLine("The Hypotenuse of tringle is:"+Hypotenuse);
		}
	}
}