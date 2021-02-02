using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using COMMON;

namespace BLL
{
    public class BChildrenManager
    {
        public static int addChildren(CChildParent cc)
        {
            return DChildrenManager.addChildren(cc);
        }
        public static void removeChildren(string idChild)
        {
            DChildrenManager.removeChildren(idChild);
        }
        public static List<CChildren> selectAllChildren()
        {
            return DChildrenManager.selectAllChildren();
        }
        public static CChildren selectChildrenById(string id)
        {
            return DChildrenManager.selectchildrenById(id);
        }
        public static List<CChildren> selectChildrenByParentId(string Parentid)
        {
            return DChildrenManager.selectchildrenByParentId(Parentid);
        }
        public static void updateChildren(CChildren cc)
        {
            DChildrenManager.updateChildren(cc);
        }
        public static List<CChildren> selectChildrenByKinderGardenCode(int code)
        {
            return DChildrenManager.selectchildrenByKinderGardenCode(code);
        }
        public static Boolean changeToNotActive(string idChild)
        {
            return DChildrenManager.changeToNotActive(idChild);
        }
    }
}
