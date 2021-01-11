using System;
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
                mail.Subject = "הודעה דחופה מהגן של"+nameChild;
                mail.Body = nameChild +"לא הגיעה לגן בדקו את הענין וצרו קשר עם הגננת!!!!";
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
                throw;
                // MessageBox.Show(ex.ToString());
                /////////////
            }
        }
        static async Task SendUsingAPIAsync(string phoneNum)
        {
            HttpClient client = new HttpClient();
            //Define the Required Variables
            string key = "7vYa2efTp";
            string user = "0533141893";
            string pass = "62577475";
            string sender = "Test";
            string recipient = phoneNum;
            string msg = "Testing Api Using C#";
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
        public static bool sendMessage(string PhoneNum,string nameChild)
        {
            try
            {
                SendUsingAPIAsync(PhoneNum); //This Method Sends Using API and its ASYNC (You have to wait until the process ends)
                System.Threading.Thread.Sleep(5000); //Sleep for 5 SECOND Until API FINISH His Work
                                                     //                var client = new Client("test", "my-api-key");
                                                     //var link = client.SendMessage("Trying to send a sms message", "0013472631115");
                return true;

            }
            catch (Exception ex)
            {
                throw;

                //  return false;
            }
        }

        public static void CheckAttendance(CLiveData liveData)
        {
            sendmail(DUsersManager.selectUserByIdChild(liveData.IdChild).mailAddress,DChildrenManager.selectchildrenById(liveData.IdChild).ChildName);
            //sendMessage(DUsersManager.selectUserByIdChild(liveData.IdChild).PhoneNum,DChildrenManager.selectchildrenById(liveData.IdChild).ChildName);
            DLiveDataManager.ChangeStatus(liveData.IdChild, General.Statuses.Sent);


        }

    }
}
