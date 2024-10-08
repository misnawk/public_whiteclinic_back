import { InputProps } from '@/constants/definition';
import { hideNumberInputArrows } from '@/styles/customize';
import { containerStyle } from '@/styles/sizes';
import { Box, FormControl, IconButton, TextField } from '@mui/material';
import { FaPencil } from 'react-icons/fa6';

/**
 * @param inputID id 를 통해 해당 컴포넌트 참조하기 위한 설정값 기본값 undefined
 * @param placeholderProp 플레이스홀더 설정 프롭
 * @param handleInput 입력값 추적 후 상태적용을 위한 함수 프롭
 * @param labelProp 라벨값 설정 프롭 기본값 false
 * @param isReadOnly 읽기전용 설정 프롭 기본값 false
 * @param isDisabled 비활성화 설정 프롭 기본값 true
 * @param isRequired 공백 값 입력 방지용 양식검증 프롭
 * @param adornment 화폐단위 표시나 퍼센티지 기호 표시를 위한 프롭
 * @param type 인풋태그 타입 설정 프롭, text | number 중 택 1 , 기본값 text
 * @param color 차후 규격화 완료된 스타일 적용을 위해 object로 타입 지정만 되어있는 상태
 * @param minValue 클라이언트측에서 숫자 입력 시 최소값 설정 프롭
 * @param maxValue 클라이언트측에서 숫자 입력 시 최대값 설정 프롭
 * @param helperText 입력값 양식 검증 시 힌트 메세지 전달 프롭, 기본값 공백문자열 ' '
 * @param variableValue DB 데이터 추출 후 표현 시에 사용할 변수 프롭
 * @param containerWidth 임시 CSS 스타일 값 차후 삭제 예정 기본값 '250px'
 * @returns FormControl 태그와 자식태그 TextField MUI 태그 반환
 */
const CInput = ({
  inputID = undefined,
  isReadOnly = false,
  isDisabled = false,
  isRequired = true,
  type = 'text',
  helperText = ' ',
  containerWidth = '260px',
  color,
  ...props
}: InputProps) => {
  return (
    <FormControl sx={{ ...containerStyle.boxSize, width: containerWidth }}>
      <TextField
        sx={{
          color,
          ...(type === 'number' && hideNumberInputArrows), // number 타입에만 적용
        }}
        placeholder={props.placeholderProp}
        InputProps={{
          inputProps: { min: props.minValue, max: props.maxValue },
          readOnly: isReadOnly,
          endAdornment: props.isModifiable ? (
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
              {props.adornment}
              <IconButton onClick={props.modifyInput}>
                <FaPencil color="silver" size={15} />
              </IconButton>
            </Box>
          ) : null,
          disabled: isDisabled,
          required: isRequired,
        }}
        id={inputID}
        label={props.labelProp}
        type={type}
        onChange={props.handleInput}
        helperText={helperText}
        defaultValue={props.variableValue}
      />
    </FormControl>
  );
};

export default CInput;
