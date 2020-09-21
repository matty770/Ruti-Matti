using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMMON
{
    public class allreadyExist:Exception
    {
        public override string Message
        {
            get { return "item allready exists. sorry!"; }
        }
    }
}
