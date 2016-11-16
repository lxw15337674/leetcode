/**
 * Created by 40417 on 2016/11/16 0016.
 */
public class day3 {
    public static void main(String[] args){
        int[] arr = {12,16,19,23,54};
        int index = search(arr,16);
        System.out.println(index);
    }
    public static int search(int[] arr,int target){
        int max = arr.length-1;
        int min = 0;
        while(true){
            int mid = (max+min)/2;
            System.out.println(max+" "+min+" "+mid);
            if(target == arr[mid]){
                return mid;
            }
            if(target > arr[mid]){
                min = mid +1;
            }
            else{
                max = mid -1;
            }
            if(max<min){
                return -1;
            }
        }
    }


}
