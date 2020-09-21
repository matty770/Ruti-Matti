using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class notExistException:Exception
    {
        public override string Message
        {
            get { return "item doesn't exist. sorry!"; }
        }
    }
}
