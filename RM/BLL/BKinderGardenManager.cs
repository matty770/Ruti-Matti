﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using COMMON;
namespace BLL
{
    public class BKinderGardenManager
    {
        public static void addKinderGarden(CKinderGarden ck)
        {
            DKinderGardenManager.addKinderGarden(ck);
        }
        public static int removeKinderGarden(int code)
        {
           return DKinderGardenManager.removeKinderGarden(code);
        }
        public static List<CKinderGarden> selectAllKinderGarden()
        {
            return DKinderGardenManager.selectAllKinderGarden();
        }
        public static CKinderGarden selectKinderGardenByCode(int code)
        {
            return DKinderGardenManager.selectKinderByCode(code);
        }
        public static CKinderGarden updateKinderGarden(CKinderGarden ck)
        {
            return DKinderGardenManager.updateKinderGarden(ck);
        }

        public static List<CKinderGarden> selectKinderGardenByIdTeacher(string TeacherId)
        {
            return DKinderGardenManager.selectKinderGardenByIdTeacher(TeacherId);
        }
    }
}
