import React from 'react';
import {Label, LabelDescription, AddSourcesCon, Input, TitleInputTitle, TitleInputURL, InputCon, Button} from './step_sources_styles';

const StepSources = () => {
    return (
        <div>
            <Label> Sources 
                <LabelDescription>Add link to webpages or files for your students to read relating to the topic.</LabelDescription>
            </Label>
            <AddSourcesCon>
                <InputCon>
                    <TitleInputTitle>Title</TitleInputTitle>
                    <Input placeholder="Wikipedia" />
                </InputCon>
                <InputCon>
                    <TitleInputURL>Url</TitleInputURL>
                    <Input placeholder="www.wikipedia.com" />
                </InputCon>
                <Button type="button">Add</Button>
            </AddSourcesCon>
        </div>
    )
}

export default StepSources;
