import React from "react";
import {Card, Image, CardHeader, CardMeta, CardDescription, CardContent, Icon, ButtonGroup, Button} from "semantic-ui-react";
import {Activity} from "../../../app/models/activity.ts";

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: Props) {
    return (
        <Card fluid={true}>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
            <CardContent>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                    <span>{activity.date}</span>
                </CardMeta>
                <CardDescription>
                    {activity.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <ButtonGroup width='2'>
                    <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectActivity} basic color='green' content='Cancel'/>
                </ButtonGroup>
            </CardContent>
        </Card>
    )
}