MM���ͣ�http://blog.csdn.net/testcs_dn

3��ʡ���м����˵���ie/ff ����ͨ����֧�ֶ�����棬֧���¼�

demo1Ϊ��򵥵�һ��ʵ�֣�ҳ��id��������js�ļ���д�룬�ʺϼ����
demo2�����˶�̬���ã��ɽ�������룬�ʺ�ҳ����ڶ����������

����Ϊ��������json��ʽ,��ʹ��ajax��ȡ��������ashx/asmx����Ҳ��ֱ�ӱ���Ϊjs�ļ���
�ɸ�����ĵ������ݵ�����ʽ�����޸Ķ�ӦԴ��
var _ds_data=[
{
	id:0,
	name:"\u5317\u4EAC",
	city:[
		{
			id:1,
			name:"\u5317\u4EAC\u5E02",
			area:[{id:1,name:"\u4E1C\u57CE\u533A"},{...},{...}...]
		},...]
}
Ϊ��ֹ���룬ʹ����unicode���룬ת���������£�

        /// <summary>
        /// ��ԭʼ�ִ�ת��Ϊunicode,��ʽΪ\u....\u....
        /// </summary>
        /// <param ></param>
        /// <returns></returns>
        public static string StringToUnicode(string srcText)
        {
            string dst = "";
            char[] src = srcText.ToCharArray();
            for (int i = 0; i < src.Length; i++)
            {
                byte[] bytes = Encoding.Unicode.GetBytes(src[i].ToString());
                string str = @"\u" + bytes[1].ToString("X2") + bytes[0].ToString("X2");
                dst += str;
            }
            return dst;
        }

        /// <summary>
        /// ��Unicode�ִ�\u....\u....��ʽ�ִ�ת��Ϊԭʼ�ַ���
        /// </summary>
        /// <param ></param>
        /// <returns></returns>
        public static string UnicodeToString(string srcText)
        {
            string dst = "";
            string src = srcText;
            int len = srcText.Length / 6;

            for (int i = 0; i <= len - 1; i++)
            {
                string str = "";
                str = src.Substring(0, 6).Substring(2);
                src = src.Substring(6);
                byte[] bytes = new byte[2];
                bytes[1] = byte.Parse(int.Parse(str.Substring(0, 2), NumberStyles.HexNumber).ToString());
                bytes[0] = byte.Parse(int.Parse(str.Substring(2, 2), NumberStyles.HexNumber).ToString());
                dst += Encoding.Unicode.GetString(bytes);
            }
            return dst;
        }