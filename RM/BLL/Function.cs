﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;
using TextmagicRest;
using TextmagicRest.Model;
using COMMON;
using DAL;
using System.Net.Http;

namespace BLL
{
    public class Function
    {
        public static void sendmail(string addressMail,string nameChild)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress("attendanceforstudent@gmail.com");
                mail.To.Add(addressMail);
                mail.Subject = " הודעה דחופה מהגן של "+nameChild;
                mail.Body = nameChild +" לא הופיע/ה בגן צרו קשר דחוף עם הגננת להפסקת ההודעה ";
                SmtpServer.Port = 587;
                SmtpServer.UseDefaultCredentials = false;
                SmtpServer.Credentials = new System.Net.NetworkCredential("attendanceforstudent@gmail.com", "0533141893");
                SmtpServer.EnableSsl = true;
                // SmtpServer.DeliveryMethod = SmtpDeliveryMethod.Network;
                SmtpServer.Send(mail);


                //MessageBox.Show("mail Send");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                // MessageBox.Show(ex.ToString());
                /////////////
            }
        }
        static async Task SendUsingAPIAsync(string phoneNum, string fName)
        {
            try
            {
                HttpClient client = new HttpClient();
                //Define the Required Variables
                string key = "QU1fOvjx0";
                string user = "0533188452";
                string pass = "22385404";
                string sender = "Gan";
                string recipient = phoneNum;
                string msg = " הודעה דחופה מהגן של " + fName +" ,"+fName + " לא הופיע/ה בגן צרו קשר דחוף עם הגננת להפסקת ההודעה ";
                var values = new Dictionary<string, string>
            {
                { "key", key }, { "user", user },{ "pass", pass },
                { "sender", sender }, { "recipient", recipient },
                { "msg", msg }
            };
                var content = new FormUrlEncodedContent(values); //Encode the Data
                var response = await client.PostAsync("https://www.sms4free.co.il/ApiSMS/SendSMS", content);
                var responseString = await response.Content.ReadAsStringAsync();
                Console.WriteLine(responseString); //Gives You How many Recipients the message was sent to
            }
            catch (Exception e)
            {

                throw e;
            }
            
        }
        public static bool sendMessage(string PhoneNum,string nameChild)
        {
            try
            {
                SendUsingAPIAsync(PhoneNum, nameChild); //This Method Sends Using API and its ASYNC (You have to wait until the process ends)
                System.Threading.Thread.Sleep(5000); //Sleep for 5 SECOND Until API FINISH His Work
                                                     //                var client = new Client("test", "my-api-key");
                                                     //var link = client.SendMessage("Trying to send a sms message", "0013472631115");
                return true;

            }
            catch (Exception ex)
            {
               // throw;
                Console.WriteLine(ex.Message);
                  return false;
            }
        }

        public static void CheckAttendance(CLiveData liveData)
        {
            string fname = DChildrenManager.selectchildrenById(liveData.IdChild).FirstName;
            sendmail(DUsersManager.selectUserByIdChild(liveData.IdChild).mailAddress,fname);
          //  sendMessage(DUsersManager.selectUserByIdChild(liveData.IdChild).PhoneNum,fname);
           // DLiveDataManager.ChangeStatus(liveData.IdChild, General.Statuses.Sent);


        }

    }
}
