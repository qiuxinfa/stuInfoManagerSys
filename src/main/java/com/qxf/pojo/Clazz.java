package com.qxf.pojo;

/**
 * 班级类
 * @author Administrator
 *
 */
public class Clazz {
	private String id;
	private String name;
	private String majorId;
	private String instituteId;
	
	public Clazz() {
		
	}

	public Clazz(String id, String name, String majorId, String instituteId) {
		this.id = id;
		this.name = name;
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
		return "Clazz [id=" + id + ", name=" + name + ", majorId=" + majorId + ", instituteId=" + instituteId + "]";
	}
	
}
