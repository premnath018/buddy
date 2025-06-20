"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Github, Linkedin } from "lucide-react";

function SocialMediaForm() {
  const { register } = useFormContext();

  return (
    <div className="space-y-5 md:space-y-3 mt-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2 animate-slide-up stagger-1">
          <Label htmlFor="github_username" className="flex items-center gap-1">
            <Github className="h-4 w-4" />
            GitHub Username
          </Label>
          <Input
            id="github_username"
            placeholder="johndoe"
            {...register("github_username")}
            className="form-field-animation"
          />
        </div>

        <div className="space-y-2 animate-slide-up stagger-2">
          <Label
            htmlFor="leetcode_username"
            className="flex items-center gap-1"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
            </svg>
            LeetCode Username
          </Label>
          <Input
            id="leetcode_username"
            placeholder="johndoe"
            {...register("leetcode_username")}
            className="form-field-animation"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2 animate-slide-up stagger-3">
          <Label
            htmlFor="linkedin_username"
            className="flex items-center gap-1"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn Username
          </Label>
          <Input
            id="linkedin_username"
            placeholder="johndoe"
            {...register("linkedin_username")}
            className="form-field-animation"
          />
        </div>

        <div className=" animate-slide-up stagger-4">
          <Label htmlFor="resume_link">Resume Link</Label>
          <Input
            id="resume_link"
            placeholder="https://example.com/resume.pdf"
            {...register("resume_link")}
            className="form-field-animation"
          />
        </div>
      </div>

      <div className=" animate-slide-up stagger-5">
        <Label htmlFor="profile_picture">Profile Picture URL</Label>
        <Input
          id="profile_picture"
          placeholder="https://example.com/profile.jpg"
          {...register("profile_picture")}
          className="form-field-animation"
        />
      </div>
    </div>
  );
}

export default SocialMediaForm;
