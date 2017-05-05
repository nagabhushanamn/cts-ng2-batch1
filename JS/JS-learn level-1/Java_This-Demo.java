
class Person{
    String name;
    public void sayName(){
        String name="Local";
        System.out.println("im "+name);
        System.out.println("im "+this.name)
    }
}

public class Java_This_Demo{
    public static void main(String[] args){
        Person person=new Person();
        person.name="Nag";
        person.sayName();
    }
}