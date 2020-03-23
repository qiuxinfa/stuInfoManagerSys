package com.qxf.pojo;

/**
 * 老师类
 * @author Administrator
 *
 */
public class Teacher {
	private String id;
	private String name;
	private String title;
	
	public Teacher() {
		
	}

	public Teacher(String id, String name, String title) {
		this.id = id;
		this.name = name;
		this.title = title;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Override
	public String toString() {
		return "Teacher [id=" + id + ", name=" + name + ", title=" + title + "]";
	}
	
	
	
}
