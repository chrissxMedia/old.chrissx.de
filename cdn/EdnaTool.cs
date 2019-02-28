//(c) 2018 by chrissx
//if you use this, please give credit

using static System.Console;
using static System.IO.File;
using static System.IO.Path;

namespace E{class P{static void Main(){
	Write("Video dictionary: ");
	string[] l = ReadAllLines(ReadLine());
	Write("Video directory: ");
	string vd = ReadLine();
	Write("Output directory: ");
	string od = ReadLine();
	int i = 0;
	while (i < l.Length)
		Copy(Combine(vd, l[i++]),
			Combine(od, l[i++]));
}}}
