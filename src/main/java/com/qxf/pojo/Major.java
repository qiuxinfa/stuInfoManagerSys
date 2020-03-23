package com.qxf.pojo;

/**
 * 专业类
 * @author Administrator
 *
 */
public class Major {
	private String id;
	private String name;
	private String instituteId;
	
	public Major() {
		
	}

	public Major(String id, String name, String instituteId) {
		this.id = id;
		this.name = name;
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

	public String getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(String instituteId) {
		this.instituteId = instituteId;
	}

	@Override
	public String toString() {
		return "Major [id=" + id + ", name=" + name + ", instituteId=" + instituteId + "]";
	}
	
	
	
}
