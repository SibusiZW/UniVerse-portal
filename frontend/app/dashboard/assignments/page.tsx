"use client";

import { useEffect, useState } from "react";
import { NotebookPen } from "lucide-react";

interface Assignment {
    assignment_id: string,
    course: string,
    issued_by: string
    // TODO: Finish setting up interface for assignments
}

export default function AssignmentsPage() {


    return (
        <NotebookPen className="mb-6" size={100}/>
        // TODO: Write markup and JS logic for displaying available assignments
    )
}