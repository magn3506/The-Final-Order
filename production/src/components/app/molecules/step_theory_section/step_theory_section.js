import React, {useState} from 'react';
import {Container, TitleCon, Title, Number, Label, LabelDescription, TextArea, SourceCon, SourceTitle, SourceURL, SourceTextCon, CloseIconCon, CloseIcon} from './step_theory_section_styles';
import StepSources from '../step_sources/step_sources';
import {colors} from '../../../../styles/global/colors';

const StepTheorySection = () => {
    const [sources, setSources] = useState([]);
    const [sourceTitle, setSourceTitle] = useState({title: ""});
    const [URL, setURL] = useState({url: ""});

    const sourceStringARR = JSON.stringify(sources);

    const AddSources = () => {
        setSources([
            ...sources,
            {
              title: sourceTitle.title,
              url: URL.url
            }
          ]);

          console.log("sources: ", sources);
      }

      const handleChangeSourceTitle = (e) => {
        setSourceTitle({title: e.target.value});
      }
      const handleChangeSourceURL = (e) => {
        setURL({url: e.target.value});
      }

      const handleRemoveSource = title => {
        setSources(sources.filter(source => source.title !== title))
      }

    return (
        <Container>
            <TitleCon>
                <Number>2</Number>
                <Title>Theory</Title>
            </TitleCon>
            <Label> Insert theory 
                <LabelDescription>Give a detailed description of the theory behind your step. The theory should relate to the answer in the quiz.</LabelDescription>
                <TextArea required name="theoryText" rows="7" cols="75" placeholder="Fx. In this lecture we will be learning about basic algebra. We will talk about negative numbers for a foundation stand point and be a quiz about algebraic expressions."/>
            </Label>
            <StepSources sourceTitle={sourceTitle} URL={URL} handleChangeSourceTitle={handleChangeSourceTitle} handleChangeSourceURL={handleChangeSourceURL} AddSources={AddSources} />
            {
               sources === [] ? null : sources.map((source, index) => {
                    return (
                    <SourceCon key={index}>
                        <CloseIconCon>
                            <CloseIcon onClick={() => handleRemoveSource(source.title)} color={colors.sand} size="1.5em"/>
                        </CloseIconCon>
                        <SourceTextCon>                  
                            <SourceTitle>{source.title}</SourceTitle>
                            <SourceURL>{source.url}</SourceURL>
                        </SourceTextCon>
                    </SourceCon>
                    )
                })
            }
            <input type="hidden" name="sources" value={sourceStringARR}></input>
        </Container>
    )
}

export default StepTheorySection;