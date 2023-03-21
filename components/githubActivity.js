import Link from "next/link"
import parseActivityData from "../github_activity_parser"

export default function GithubActivity(activity) {
    return (
        parseActivityData(activity)
    )
}