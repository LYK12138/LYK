MM博客：http://blog.csdn.net/testcs_dn

3级省地市级联菜单，ie/ff 测试通过，支持多个并存，支持事件

demo1为最简单的一份实现，页面id配置需在js文件中写入，适合简单情况
demo2增加了动态配置，可将配置项传入，适合页面存在多个级联下拉

以下为地市数据json格式,可使用ajax获取或者做成ashx/asmx服务也可直接保存为js文件，
可根据你的地市数据调整格式，并修改对应源码
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
为防止乱码，使用了unicode编码，转换代码如下：

        /// <summary>
        /// 将原始字串转换为unicode,格式为\u....\u....
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
        /// 将Unicode字串\u....\u....格式字串转换为原始字符串
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