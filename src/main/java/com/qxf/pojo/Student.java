package com.qxf.pojo;

/**
 * 学生类
 * @author Administrator
 *
 */
public class Student {
	private String id;
	private String name;
	private Integer sex;
	private Integer age;
	private String phone;
	private String clazzId;
	private String majorId;
	private String instituteId;
	
	public Student() {
		
	}

	public Student(String id, String name, Integer sex, Integer age, String phone, String clazzId, String majorId,
			String instituteId) {
		super();
		this.id = id;
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.phone = phone;
		this.clazzId = clazzId;
		this.majorId = majorId;
		this.instituteId = instituteId;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getSex() {
		return sex;
	}

	public void setSex(Integer sex) {
		this.sex = sex;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getClazzId() {
		return clazzId;
	}

	public void setClazzId(String clazzId) {
		this.clazzId = clazzId;
	}

	public String getMajorId() {
		return majorId;
	}

	public void setMajorId(String majorId) {
		this.majorId = majorId;
	}

	public String getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(String instituteId) {
		this.instituteId = instituteId;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", sex=" + sex + ", age=" + age + ", phone=" + phone
				+ ", clazzId=" + clazzId + ", majorId=" + majorId + ", instituteId=" + instituteId + "]";
	}
	
	
}
