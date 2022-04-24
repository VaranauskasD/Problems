// Encode by adding a suffix. Decode using a split with the suffix param.

public class Solution {
  public String encode(List<String> strs) {
      String encoded = "";
      for (int i = 0; i < strs.size(); i++) {
          encoded += strs.get(i);
          if (i != strs.size() - 1) encoded += ":;";
      }
      return encoded;
  }

  public List<String> decode(String str) {
      List<String> decoded = new ArrayList<String>();
      for (String s : str.split(":;")) {
          decoded.add(s);
      }
      return decoded;
  }
}