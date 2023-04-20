import Link from "next/link";
export default function GitHubActivityBuilder(activity) {
    let activityObj = activity['activity'];
    //TODO: Attempt to make this code a little cleaner. Currently I am just conditionally rendering and that works fine but maybe I could do something other than that
    return (
        <>
            <div className="rounded-lg bg-neutral-900 m-6 p-4 flex-1 h-[250px] w-[250px] lg:w-[500px] overflow-auto relative">
                <div className="text-white text-xl">{"I "+eventTranslator[activityObj.type]}</div>
                <ul>
                    <li>
                        {activityObj.repo ? 
                            <div className="sm:text-lg text-sm">
                                Repository that I interacted with:
                                <Link className="underline text-sky-700" href={'https://www.github.com/'+activityObj.repo.name}> {activityObj.repo.name}</Link>
                            </div> : null
                        }
                    </li>
                        {activityObj.payload.issue ? 
                            <div className="sm:text-lg text-sm underline">
                                <Link href={activityObj.payload.issue.html_url}>Link to the issue interaction</Link>
                            </div> : null
                        }
                    <li>
                        {activityObj.payload.head ? 
                            <div className="sm:text-lg text-sm underline">
                                <Link href={'https://github.com/'+activityObj.repo.name+'/commit/'+activityObj.payload.head}>Link to push overview</Link>
                            </div> : null
                        }
                    </li>
                    <li>
                        {activityObj.payload.pull_request ? 
                            <div className="sm:text-lg text-sm">
                                <Link className="underline" href={activityObj.payload.pull_request.html_url}>Link to PR</Link>
                            </div> : null
                        }
                    </li>
                    <li>
                        {activityObj.type == 'CreateEvent' ? 
                            <div className="sm:text-lg text-sm">
                                I created a {activityObj.payload.ref_type} named {activityObj.payload.ref} in <div className="underline"><Link href={'https://github.com/'+activityObj.repo.name}>{activityObj.repo.name}</Link></div>
                            </div> : activityObj.type == 'DeleteEvent' ? <div className="sm:text-lg text-sm underline">
                                I deleted a {activityObj.payload.ref_type} named {activityObj.payload.ref} in <div className="underline"><Link href={'https://github.com/'+activityObj.repo.name}>{activityObj.repo.name}</Link></div>
                            </div> : null
                    }
                    </li>
                </ul>
                {activityObj.created_at ?  
                    <div className="text-sm right-0 pt-2 pb-2 bottom-0 relative">
                        {"Occured on: " + new Date(activityObj.created_at).toLocaleString()}
                    </div> : null
                }
            </div>
        </>
    )


}

const eventTranslator = {
    "CommitCommentEvent": "added a comment to an existing commit.",
    "CreateEvent" : "created a Git branch or tag.",
    "DeleteEvent" : "deleted a Git branch or tag.",
    "ForkEvent" : "forked a repository.",
    "GollumEvent": "created or updated a wiki page.",
    "IssueCommentEvent" : "commented on an issue or pull request.",
    "IssuesEvent" : "interacted with an issue.",
    "MemberEvent" : "interacted with an organization on GitHub.",
    "PublicEvent" : "created a public GitHub repository.",
    "PullRequestEvent" : "interacted with a pull request on GitHub.",
    "PullRequestReviewEvent" : "interacted with a pull request review on GitHub.",
    "PullRequestReviewCommentEvent" : "interacted with a pull request review's comments in the unified diff.",
    "PullRequestReviewThreadEvent" : "interacted with a request thread was marked as resolved or unresolved.",
    "PushEvent" : "pushed on or more commits to a repository branch or tag.",
    "ReleaseEvent" : "published a new release on GitHub.",
    "SponsorshipEvent" : "interacted with a sponsorship listing.",
    "WatchEvent" : "starred a repository."
}