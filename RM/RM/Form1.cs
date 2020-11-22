using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Net.Mail;
using COMMON;
using BLL;
namespace RM
{
    public partial class Form1 : Form
    {
       
        public Form1()
        {
            InitializeComponent();

        }

        private void btnAddk_Click(object sender, EventArgs e)
        {
            CKinderGarden k = new CKinderGarden(int.Parse(txtCodek.Text), txtNamek.Text, txtAddressk.Text,txtPhonek.Text,int.Parse(txtYeark.Text),TimeSpan.Parse(txtBegink.Text), TimeSpan.Parse(txtSpacek.Text));
            BKinderGardenManager.addKinderGarden(k);
            txtCodek.Text = "";
            txtNamek.Text = "";
            txtAddressk.Text = "";
            txtPhonek.Text = "";
            txtBegink.Text = "";
            txtSpacek.Text = "";
            txtYeark.Text = "";
        }

        private void button2_Click(object sender, EventArgs e)
        {
            BKinderGardenManager.removeKinderGarden(int.Parse(txtCodek.Text));
            txtCodek.Text = "";
        }

        private void btnAddU_Click(object sender, EventArgs e)
        {
            CUsers u = new CUsers(txtIdU.Text, txtNameU.Text, txtAddressU.Text, txtPhoneU.Text, int.Parse(txtCodeKinderU.Text),int.Parse(txtPremissionU.Text),txtMail.Text);
            BUserManager.addUser(u);
            txtIdU.Text = "";
            txtNameU.Text = "";
            txtAddressU.Text = "";
            txtPhoneU.Text="";
            txtCodeKinderU.Text = "";
            txtPremissionU.Text = "";
            txtMail.Text = "";
        }

        private void button4_Click(object sender, EventArgs e)
        {
            CChildren c = new CChildren(txtIdCH.Text, txtNameCH.Text, txtAddressCH.Text, txtPhoneCH.Text,txtCodeParentCH.Text, int.Parse(txtCodeKinderCH.Text));
            BChildrenManager.addChildren(c);
            txtIdCH.Text = "";
            txtNameCH.Text = "";
            txtAddressCH.Text = "";
            txtPhoneCH.Text = "";
            txtCodeParentCH.Text = "";
            txtCodeKinderCH.Text = "";
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            List<CFutureData> listCF = new List<CFutureData>();
            listCF= BFutureDataManager.readAllFutureData();
            CLiveData c = new CLiveData();
            DateTime d = new DateTime(2020, 2, 23);
            foreach (var item in listCF)
            {
                if (item.Date.Equals(d))
                {
                    c.IdChild = item.IdChild;
                    c.KinderGardenCode = item.KinderGardenCode;
                    c.Date = item.Date;
                    c.UpdateDate = item.UpdateDate;
                    c.UpdateBy = item.UpdateBy;
                    c.Alarm = item.Alarm;
                    c.Comments=item.Comments;
                    c.Status = item.Status;
                    //BLiveDataManager.addLiveData(c);
                }
                
            }
        }
        
        private void button5_Click(object sender, EventArgs e)
        {
            TimeSpan time = new TimeSpan(8, 0, 0);
            DateTime d = new DateTime(2020, 2, 23);
            DateTime d1 = new DateTime(2020, 2, 20);
            
            CFutureData fd = new CFutureData("888888888", 234, d, General.Statuses.Late, d1, "222222222", time, "shalom");
            BFutureDataManager.addFutureData(fd);
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            timer1.Start();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            BUserManager.removeUser(txtIdU.Text);
            txtIdU.Text = "";
        }

        private void button7_Click(object sender, EventArgs e)
        {
            //TimeSpan time = new TimeSpan(8, 0, 0);
            //TimeSpan time1 = new TimeSpan(7, 0, 0);
            //CKinderGarden k = new CKinderGarden(678, "kkk", "iii", "053", 1245, time, time1);
            CKinderGarden k = new CKinderGarden(int.Parse(txtCodek.Text), txtNamek.Text, txtAddressk.Text, txtPhonek.Text, int.Parse(txtYeark.Text), TimeSpan.Parse(txtBegink.Text), TimeSpan.Parse(txtSpacek.Text));
            BKinderGardenManager.updateKinderGarden(k);
            txtCodek.Text = "";
            txtNamek.Text = "";
            txtAddressk.Text = "";
            txtPhonek.Text = "";
            txtBegink.Text = "";
            txtSpacek.Text = "";
            txtYeark.Text = "";
        }

        private void button8_Click(object sender, EventArgs e)
        {
            BChildrenManager.removeChildren("11111");
        }

        private void btnSendMail_Click(object sender, EventArgs e)
        {
            //try
            //{
            //    MailMessage mail = new MailMessage();
            //    SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

            //    mail.From = new MailAddress("mattybrand893@gmail.com");
            //    mail.To.Add("r0548591609@gmail.com");
            //    mail.Subject = "zehirut";
            //    mail.Body = "hayeled lo bagan!!!!";
            //    SmtpServer.Port = 587;
            //    SmtpServer.Credentials = new System.Net.NetworkCredential("username", "password");
            //    SmtpServer.EnableSsl = true;

            //    SmtpServer.Send(mail);
            //    MessageBox.Show("mail Send");
            //}
            //catch (Exception ex)
            //{
            //    MessageBox.Show(ex.ToString());
            //}
            Function.sendmail("r0548591609@gmail.com");
            btnSendMail.Text = "ffffffff";
            
        }

        private void label13_Click(object sender, EventArgs e)
        {

        }
        private void button1_Click(object sender, EventArgs e)
        {
            if (Function.sendMessage("r0548591609@gmail.com"))
                label24.Text = "send";
            else label24.Text = "no send";
  }



        private void button1_Click_2(object sender, EventArgs e)
        {
            
         
          //BLiveDataManager.copyChildrenToLiveData();
           BLiveDataManager.copyFutureToLivaData();
            button1.Text = "ddd";

        }
    }
}
